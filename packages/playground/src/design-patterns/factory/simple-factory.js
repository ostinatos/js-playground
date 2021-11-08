// 实体产品类
class WoodenDoor {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}

// factory方法 一般为静态方法，所以可以直接定义为一个对象，不需要定义为class
const DoorFactory = {
    makeDoor(width, height) {
        return new WoodenDoor(width, height);
    },
};

DoorFactory.makeDoor(5, 4);
