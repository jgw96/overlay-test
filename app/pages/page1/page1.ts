import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ActionSheetController, PopoverController, ToastController, ModalController } from 'ionic-angular';

import { PopoverPage } from '../../pages/popover_page/popover';
import { ModalPage } from '../../pages/modal_page/modal';

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {

  items: any[];

  constructor(
    private navController: NavController,
    private alert: AlertController,
    private loading: LoadingController,
    private actionSheet: ActionSheetController,
    private popover: PopoverController,
    private toast: ToastController,
    private modal: ModalController) {
    this.items = [];
  }

  ionViewDidEnter() {
    let loading = this.loading.create({
      content: 'Loading items...'
    });
    loading.present();
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push({ name: 'ionic' });
      }
      loading.dismiss();
    }, 3000);
  }

  openAlert() {
    let alert = this.alert.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
    alert.onDidDismiss(() => {
      let toast = this.toast.create({
        message: 'You closed an alert',
        duration: 3000,
      });
      toast.present();
    });
  }

  openSheet() {
    let actions = this.actionSheet.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Open Modal',
          handler: () => {
            console.log('Archive clicked');
            actions.onDidDismiss(() => {
              let modal = this.modal.create(ModalPage);
              modal.present();
            });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actions.present();
  }

  presentPopover(myEvent) {
    let popover = this.popover.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
