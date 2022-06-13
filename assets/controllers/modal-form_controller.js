import { Controller } from "@hotwired/stimulus";
import { Modal } from "bootstrap";

import $ from "jquery";
import { useDispatch } from "stimulus-use";

export default class extends Controller{
    static targets = ['modal', 'modalBody'];
    static values = {
        formUrl: String
    }

    modal = null;

    connect(){
        //useDispatch(this, {debug: true}); // Use debug to obtain event dispatch
        useDispatch(this);
    }
    
    async openMondal(){
        
        this.modalBodyTarget.innerHTML = 'Loading...';
        
        this.modal = new Modal(this.modalTarget);
        this.modal.show();

        this.modalBodyTarget.innerHTML = await $.ajax(this.formUrlValue);
    }


    async submitForm (event){
        
        event.preventDefault();

        //const $form = this.modalBodyTarget.getElementsBytagName('form')[0];
        const $form = $(this.modalBodyTarget).find('form');
        
        try {
            
            await $.ajax({
                //url: $form.prop('action'),
                url: this.formUrlValue,
                method: $form.prop('method'),
                data: $form.serialize()
            });

            this.modal.hide();

            this.dispatch('success'); //modal-form:success

        } catch (error) {
            this.modalBodyTarget.innerHTML = error.responseText;
        }

    }

    onHiddenModal(event){
      console.log('hidden modal');  
    }

}