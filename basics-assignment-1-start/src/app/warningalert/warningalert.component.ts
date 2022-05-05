import { Component } from "@angular/core";

@Component({
    selector: 'warning-alert',
    template: '<h3>Warning!</h3>',
    styles: [`
        h3 {
            color: yellow;
            border: 2px solid red;
            padding: 2px;
            padding-top: 5px;
            padding-bottom: 5px;
            background-color: black;
            text-align: center;
            width: 70%;
            margin: auto;
        }
    `]
})
export class WarningAlert {
}