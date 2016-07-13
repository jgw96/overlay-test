import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    template: `
    <ion-header>
      <ion-navbar primary>
        <ion-title>Modal</ion-title>
        <ion-buttons start>
          <button (click)="close()">
            <ion-icon name='close'></ion-icon>
          </button>
        </ion-buttons>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <h2>I'm a modal!</h2>
    </ion-content>
  `
})
export class ModalPage {
    constructor(private viewCtrl: ViewController) { }

    close() {
        this.viewCtrl.dismiss();
    }
}