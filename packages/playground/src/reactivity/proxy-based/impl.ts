/* generator to generate unique id */
class IdGenerator {
    static currentId = 1;
    static getId() {
        return '' + this.currentId++;
    }
}

/* subscriber */
class Subs {
    // id to identify current dep object. should be unique across the whole application
    id: string;
    notify: () => void;
    constructor(id: string) {
        this.id = id;
        // here assign a initial notify callback
        this.notify = () => {
            return;
        };
    }

    /* 
    这里为什么不在constructor 中赋值notify，而是提供一个额外的setter 来赋值？
    
    */
    setNotifyCallback(notify: () => void) {
        this.notify = notify;
    }
}

// dep object of current invoker
let currentInvokerDep: Subs | null = null;

export function ref(val: any) {
    // A list of subscribers who are listening for changes made in current proxy
    const subscribers = new Map<string, Subs>();

    const proxiedValue = {
        value: val,
        subs: subscribers,
    };

    return new Proxy(proxiedValue, {
        get(target, prop) {
            if (prop === 'value') {
                // collect dependencies
                track({ subscribers });
                return proxiedValue.value;
            }
        },
        set(target, prop, inputValue) {
            if (prop === 'value') {
                proxiedValue.value = inputValue;
                // trigger effect, don't forget to place this line after value set.
                trigger({ subscribers });
            }
            return true;
        },
    });
}

// track dependencies
function track(payload: { subscribers: Map<string, Subs> }) {
    // add current invoker's dep object to current proxy's subscriber list
    // 这里有一个实现上的问题，就是不应该重复将当前的invoker 重复加入到 subscribers 里
    // 意思是说，如果之前已经加入过的话，就不应该再重复加入了，否则这个 subscribers list越来越长，值发生更改时也会重复触发监听
    const { subscribers } = payload;
    if (currentInvokerDep) {
        if (!subscribers.has(currentInvokerDep.id)) {
            // current invoker has not been listed in subscribers, so add it
            subscribers.set(currentInvokerDep.id, currentInvokerDep);
        }
    }
}

/* 
trigger updates of subscribers
 */
function trigger(payload: { subscribers: Map<string, Subs> }) {
    const { subscribers } = payload;

    // iterate subscriber, notify changes
    subscribers.forEach((subs) => {
        subs.notify();
    });
}

export function computed(evaluator: () => any) {
    // create a new Dep object for current computed property
    const dep = new Subs(IdGenerator.getId());

    // set current dep as current invoker's dep
    currentInvokerDep = dep;
    // create a ref object for returned value, value equals to result of executing evaluator
    const result = ref(evaluator());

    // NOTICE: reset current dep, so that it won't affect others
    currentInvokerDep = null;

    /* 在依赖的值变化后被调用，将返回的ref 对象内的 value 进行修改 */
    dep.setNotifyCallback(() => {
        result.value = evaluator();
    });

    return result;
}
