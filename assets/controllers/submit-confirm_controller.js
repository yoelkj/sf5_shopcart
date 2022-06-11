import { Controller } from "@hotwired/stimulus";
import Swal from 'sweetalert2';

export default class extends Controller{
    
    static values = {
        title: String,
        text: String,
        icon: String,
        confirmButton: String,
        submitAsync: Boolean
    };

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

    submitForm(){
        
        if (!this.submitAsyncValue) {
            //Submit form
            this.element.submit();
            return;
        }else{
            //Ajax submit form
            return fetch(this.element.action, {
                method: this.element.method,
                body: new URLSearchParams(new FormData(this.element))
            })
        }
        
    }

}