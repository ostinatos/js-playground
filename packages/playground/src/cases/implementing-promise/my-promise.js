const STATES = {
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class MyPromise {
  constructor(executor) {
    // make resolve and reject an inner function of the constructor
    const resolve = () => {
      this.state = STATES.RESOLVED;
    };
    const reject = () => {
      this.state = STATES.REJECTED;
    };
    this.state = STATES.PENDING;
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
}
