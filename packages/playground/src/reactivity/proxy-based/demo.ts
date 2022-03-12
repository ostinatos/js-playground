import { ref, computed } from './impl';

// desired usage
const a = ref(1);
const b = ref(2);

const c = computed(() => {
    return a.value + b.value;
});

console.log('a', a);
console.log('a.value', a.value);
console.log('b', b);
console.log('b.value', b.value);

// expect value: 3
console.log('c.value:', c.value);

a.value = 3;
console.log('a.value', a.value);

// expect value: 5
console.log('c.value:', c.value);
