function loopObject(object){
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            console.log(`key: ${key} value: ${element}`)
        }
    }
}

function loopObject2(object){
    Object.keys(object).forEach(element =>{
        console.log(`key: ${element} value: ${object[element]}`)
    })
}

let obj = {
    "p1":"a",
    "p2":"b",
    "p3":"c"
}

let someObj = {
    "p0":"z"
}

obj.__proto__ = someObj;

loopObject(obj);
loopObject2(obj);

export default {};