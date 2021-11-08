function useStack(Stack) {
    console.log(
        `testing stack using ${Stack.prototype.name} ===================`
    );
    const s = new Stack();
    console.log('s.isEmpty() ', s.isEmpty());

    s.push(5);
    s.push(8);

    console.log('s.peek() ', s.peek());

    s.push(11);
    console.log('s.size() === 3 ', s.size());

    s.push(15);
    s.pop();
    let p = s.pop();
    console.log('s.pop() === 11 ', p);
    console.log('s.size() === 2 ', s.size());

    console.log('s ', s);
    try {
        console.log('s.items ', s.items);
    } catch (error) {
        console.error('error accessing items from outside ', error);
    }
}

export { useStack };
