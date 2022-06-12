import { Controller } from "@hotwired/stimulus";
import ReactDOM  from "react-dom/client";
import React from "react";
import MadeWithLove from '../components/MadeWithLove'

export default class extends Controller{
    connect(){

        const root = ReactDOM.createRoot(this.element);
        root.render(<MadeWithLove/>);

    }
}