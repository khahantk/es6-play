/*
 This is an feature ES6
 using the keyword const
 Using declare variable that MUST INITIALIZE when it declared
 Avoid redeclare
 */

const USER_ROLE = 'register';
//we can
const NUMBERS = [];
NUMBERS.push(1);
NUMBERS.push(2);

//or
const ADMIN_USER = {
    name: 'John Doe',
    email: 'adm@g.com'
};
ADMIN_USER.password = 'secured';

console.log(ADMIN_USER);

//we can not
/*
NUMBERS = [1, 2, 3];
ADMIN_USER = {
    name: 'John Doe',
    email: 'adm@g.com',
    password: 'newsecured'
}
*/
