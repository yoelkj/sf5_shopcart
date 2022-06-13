import { Controller } from "@hotwired/stimulus";

export default class extends Controller{
    
    static targets = ['content'];
    static values = {
        url: String
    }

    async refreshContent(){


        console.log('refresh page');
        
        const target = this.hasContentTarget ? this.contentTarget : this.element;
        
        console.log(target);

        target.style.opacity = .5;
        const request = await fetch(this.urlValue);
        target.innerHTML = await request.text();
        target.style.opacity = 1;
    
    }
}