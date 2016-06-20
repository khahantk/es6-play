import {Contact} from './contact/contact';
import { Article as ArticleModule, articleFormID, HELLO, role, validateForm} from './article';


let ct = new Contact();
ct.submit();

let article = new ArticleModule(20);
article.getListArticle();

console.log(HELLO);
console.log(articleFormID);