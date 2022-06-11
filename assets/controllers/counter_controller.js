import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    
    count = 0
    static targets = ['count'];

    /*
    connect() {
        this.count = 0;
        //const obj_elem_counter = this.element.getElementsByClassName('counter-count')[0];
        this.element.addEventListener('click', () => {
            this.count++;
            //obj_elem_counter.innerHTML = this.count;
            
            //To one target
            //this.countTarget.innerHTML = this.count;
            
            //When have multiple targets
            this.countTargets[0].innerHTML = this.count;
        });
    }
    */

    increment(){
        this.count++;
        this.countTarget.innerHTML = this.count;
    }
}