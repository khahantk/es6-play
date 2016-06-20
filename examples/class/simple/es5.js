//ES 5
function Contact(form) {  // function constructor
    this.form = form;    //assign form as property of Contact
}
/* instance method */
Contact.prototype.submit = function () {
    console.log('submit');
};
Contact.prototype.reset = function () {
    console.log('reset');
};
//add more method

// create new instance contact and call instance method
var mycontact = new Contact('#contactForm');
// call instance method
mycontact.submit();
