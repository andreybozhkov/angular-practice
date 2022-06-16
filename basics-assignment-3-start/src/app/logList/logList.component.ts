import { Component, Input } from "@angular/core";

@Component({
    selector: 'log-list',
    templateUrl: './logList.component.html',
    styles: [
        `.list-item-5-up {
            color: white
        }
        li::marker {
            color: black
        }
        `
    ]
})
export class LogListComponent {
    @Input() clickLog: string[]

    getBackgroundColor(index): string {
        return index + 1 >= 5 ? 'blue' : 'transparent';
    }
}