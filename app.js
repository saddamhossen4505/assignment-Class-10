

/**
 *  Email Pattern:
 *  ==============
 */ 

// let txt = 'saddamhossen4505@gmail.com';
// let pattern = /[a-z._0-9]*@[a-z]{3,}\.[a-z]{2,6}/;

// console.log(pattern.test(txt));



/**
 *  username pattern:
 * ==================
 */

// let txt = 'Saddam_hossen';
// let pattern = /^[^~!@#%^&*$-()][A-Za-z_0-9]{4,15}$/;

// console.log(pattern.test(txt));



/**
 *  Bangladeshi phone number pattern:
 * ==================================
 */

// let txt = '01779911902';
// let pattern = /^(01|\+8801|008801)[0-9]{9}$/;

// console.log(pattern.test(txt));





/**
 *  A password pattern:
 * ====================
 */

// let txt = 'Akram01@#$';
// let password = /^[A-Za-z0-9~!@#$%&_]{6,15}$/;

// console.log(password.test(txt));


/**
 *  A zipcode pattern:
 * ===================
 */

let txt ='5750';
let pattern = /^[0-9]{4}$/;

console.log(pattern.test(txt));