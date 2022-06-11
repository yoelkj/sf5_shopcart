import { Controller } from '@hotwired/stimulus';
import { useClickOutside, useDebounce } from 'stimulus-use';

export default class extends Controller {
    
    static values = {
        url: String
    }

    static targets =[
        'result'
    ];

    static debounces = ['search'];

    connect(){
        useClickOutside(this);
        useDebounce(this);
    }

    onSearchInput(event){
        this.search(event.currentTarget.value);
    }
    
    async search(query){ 
        //this.urlValue
        const params = new URLSearchParams({
            q: query,
            preview: 1
        });

        const response = await fetch(`${this.urlValue}?${params.toString()}`);//.then(response => {});
        this.resultTarget.innerHTML = await response.text();
    }

    clickOutside(event) {
        this.resultTarget.innerHTML = '';
    }

}