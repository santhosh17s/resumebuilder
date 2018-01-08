import { Component, OnDestroy } from "@angular/core";


@Component({
    selector: 'ngx-sample-layout',
    styleUrls: ['./sample.layout.scss'],
    template: `<ngx-header></ngx-header>
                <div class="main-content">
                    <alert></alert>
                    <ng-content select="router-outlet"></ng-content>
                </div>
  `
})
export class SampleLayoutComponent implements OnDestroy {
    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}   