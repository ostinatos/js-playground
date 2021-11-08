import CarMaker from './carmaker-es5';

console.debug(CarMaker);
window.CarMaker = CarMaker;

let corolla = CarMaker.factory('Compact');
let solstice = CarMaker.factory('Convertible');
let cherokee = CarMaker.factory('SUV');

console.debug('corolla: ', corolla.drive());
console.debug('solstice: ', solstice.drive());
console.debug('cherokee: ', cherokee.drive());
