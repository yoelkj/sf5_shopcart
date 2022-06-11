import { Controller } from "@hotwired/stimulus";
import { useDispatch } from "stimulus-use";
import Swal from 'sweetalert2';

export default class extends Controller{
    
    static values = {
        title: String,
        text: String,
        icon: String,
        confirmButton: String,
        submitAsync: Boolean
    };

    connect(){
        //useDispatch(this, {debug: true});
        useDispatch(this);

        //submit-confirm:async:submitted // optain this event with useDispatch and debug true
    }

    onSubmit(event){
        event.preventDefault();
        
        Swal.fire({
            title: this.titleValue || null,
            text: this.textValue || null,
            icon: this.iconValue || null,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: this.confirmButtonValue || 'Yes',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                this.submitForm()
            }
        })
    }

    async submitForm(){
        
        if (!this.submitAsyncValue) {
            //Submit traditional form
            this.element.submit();
            return;
        }
        
        //Ajax submit form
        const response = await fetch(this.element.action, {
            method: this.element.method,
            body: new URLSearchParams(new FormData(this.element))
        })
        

        this.dispatch('async:submitted', {
            response
        });
        
    }

}