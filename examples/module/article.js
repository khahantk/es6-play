export const HELLO = 1;
export var role = 'register';
export var articleFormID = 'articleFormID';

export function validateForm(form){
    console.log('validate form call');
}
export class Article{
    
    constructor(paging){
        this.paging = paging;
    }
    getListArticle(){
        console.log('get list articles');
        //jQuery.getJSON('/articles.json', this.getListArticleCallback);
    }

    getListArticleCallback(response){
        //attach data to DOM here
    }
    /*

    this will be not working, we only export top level scope of this module


    export submitNewArticle(){
            //handle form submit here
    }
     */

}