class Queue {
    constructor() {
        /* use object to store queued item, instead of array */
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    /* cost: O(1) */
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    /* cost: O(1) */
    dequeue() {
        if (!this.size()) {
            return undefined;
        }
        // get the first element off the queue
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    size() {
        return this.count - this.lowestCount;
    }

    /* inspect the first element, cost(1) */
    peek() {
        if (!this.size()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    clear() {
        //reset the items
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (!this.size()) {
            return '';
        }
        let retString = this.items[this.lowestCount];
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            retString += `, ${this.items[i]}`;
        }

        return retString;
    }
}

const q = new Queue();

q.enqueue('John');
q.enqueue('Jack');
q.enqueue('Camila');

console.log(q.toString());

q.dequeue();

console.log(q.toString());
