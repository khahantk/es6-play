//ES 6
class Contact{
  constructor(form){  // constructor 
    this.form = form; //assign form as property of Contact
  }
  submit(){
    console.log('submit');
    //jQuery(this.form).submit()
  }
  reset(){
    console.log('reset');
  }
  //add more method
}

/* how to call */
// create new instance contact and call instance method
var mycontact = new Contact('#contactForm');
// call instance method
mycontact.submit();