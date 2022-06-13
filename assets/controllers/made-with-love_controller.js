import { Controller } from "@hotwired/stimulus";
import React from "react";
import MadeWithLove from '../components/MadeWithLove'

export default class extends Controller{
    connect(){
        import('react-dom/client').then((ReactDOM)=>{
            const root = ReactDOM.default.createRoot(this.element);
            root.render(<MadeWithLove/>);
        })

    }
}