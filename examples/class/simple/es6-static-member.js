class Contact{
    constructor(form){
        this.form = form;
    }
    submit(){
        console.log('submit');
        //jQuery(this.form).submit()
    }
    //static method
    static initContactPage(){
        console.log('init contact page');
    }
    static staticMethod2(){
        //
    }
}

/* how to call */

//Call static method
Contact.initContactPage();
Contact.staticMethod2();