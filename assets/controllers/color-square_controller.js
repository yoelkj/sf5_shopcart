import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    
    selectedColorId = null;
    static targets = ['colorSquare', 'select'];
    static values = {
        colorId: Number
    };

    connect(){
        //Hide select widget
        this.selectTarget.classList.add('d-none');
    
        /*
        if(this.colorIdValue){
            this.setSelectedColor(this.colorIdValue);
        }
        */

    }

    selectColor(event) {
        //this.setSelectedColor(event.currentTarget.dataset.colorId);
        const clickedColor = event.currentTarget.dataset.colorId;
        this.colorIdValue = clickedColor == this.colorIdValue ? null : clickedColor;
    }

    //stimulus trigger callback to save color id value
    colorIdValueChanged(){
        //this.setSelectedColor(this.colorIdValue);

        this.selectTarget.value = this.colorIdValue;

        this.colorSquareTargets.forEach((element) => {
            if(element.dataset.colorId == this.colorIdValue){
                element.classList.add('selected');
            }else{
                element.classList.remove('selected');
            }
        });
    }


    /*
    setSelectedColor(clickedColorId) {

        if(this.selectedColorId == clickedColorId){
            //remove selected class to current button
            //event.currentTarget.classList.remove('selected');
            this.findSelectedColorSquare().classList.remove('selected');
            
            //to nul previews selected color
            this.selectedColorId = null;
            //select widget
            this.selectTarget.value = '';

            return;
        }

        this.selectedColorId = clickedColorId;
        
        //Remove selected class in buttons with target colorSquare
        this.colorSquareTargets.forEach( element => {
            element.classList.remove('selected');
        });

        //add class to currenttarget (button)
        //event.currentTarget.classList.add('selected');
        this.findSelectedColorSquare().classList.add('selected');
       
        //Add value to select widget
        this.selectTarget.value = this.selectedColorId;       
       
        // this.element.getElementsByClassName('selected');
    }
    */
    

    /*
    findSelectedColorSquare(){
        return this.colorSquareTargets.find( element => element.dataset.colorId == this.selectedColorId   );

    }
    */

}
