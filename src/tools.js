var logger = function(output){
console.log(output)
}


/*export var appName = "ES6 Review";

export var dummyFunction = function(){
    return "I am a dummy function";
}*/

export const multiplier = (...numbers) =>{
    let product = 1;
    if (numbers.length < 2){
        throw new Error('Illegal arguments counts. Argument must be greater than 1')
    }
    for (let number of numbers){
        
        product= product*number
    }
    return product
    
}
/**
 * A function that retruns an array of {x,y}, oobject with the y value calculated each time.
 * @param {*} m 
 * @param {*} c 
 * @param  {...any} x 
 */
export const lineGraphFunction = (m, c, ...x) => {

    //Map the array of x into an array of {x,y} object, with the y value caculated each time.
    let coordinates = x.map((x)=>{
        let y = (m*x) + c;
        return {x, y}
    })
    //return coordinates
    let output ='The (x,y) values are as  follows:';

    for (let coordinate of coordinates){
        let xy =`(${coordinate.x}, ${coordinate.y}),`
        output = output+=xy;
        
    }
    return output;
}
export default logger;

export const Person = class {
    constructor(firstName, lastName, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
}
export class User extends Person {
    constructor(username, password, firstName, lastName, gender) {
        super(firstName, lastName, gender);
        this.username = username;
        this.password = password;
    }
}

