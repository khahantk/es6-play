import {Contact} from './contact.js';

export function main() {
    let $contactForm = $('#contactForm');
    let contact = new Contact($contactForm);
    contact.init();
}
main();
