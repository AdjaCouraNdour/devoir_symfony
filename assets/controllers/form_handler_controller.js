import { Controller } from '@hotwired/stimulus';

/*
* The following line makes this controller "lazy": it won't be downloaded until needed
* See https://github.com/symfony/stimulus-bridge#lazy-controllers
*/
/* stimulusFetch: 'lazy' */


export default class extends Controller {
    connect() {
        console.log('Hello, Stimulus!');
    }
    static targets = ['Errors', 'Input', 'Button', 'Form']
    static values = {
        minlength: String,
    }
    // ...
}
