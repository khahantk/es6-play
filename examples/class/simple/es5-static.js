function Contact(form) {
    this.form = form;
}
/* instance method */
Contact.prototype.submit = function () {
    console.log('submit');
};

/* static method */
Contact.initContactPage = function(){
    //
};
Contact.staticMethod2 = function(){
    //
};

/* how to call */

//Call static method
Contact.initContactPage();
Contact.staticMethod2();
