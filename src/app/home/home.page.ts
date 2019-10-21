import { Component } from '@angular/core';
import {
    AlertController,
    ModalController,
    ToastController
} from '@ionic/angular';
import { AlertInput } from '@ionic/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    constructor(
        private _alertCtl: AlertController,
        private _modalCtl: ModalController,
        private _toastCtrl: ToastController
    ) {}

    public async createAlert(): Promise<void> {
        // const res = await this._alertCtl.create({
        //     inputs: [
        //         {
        //             placeholder: 'Test Input (Do not exceed 10 characters)',
        //             type: 'text',
        //             name: 'limitedInput'
        //         }
        //     ],
        //     buttons: [
        //         {
        //             text: 'CLOSE',
        //             handler: val => {
        //                 if (val.limitedInput.length > 10) {
        //                     return false;
        //                 }
        //             }
        //         }
        //     ]
        // });
        // res.present();
        // const res = await this._modalCtl.create({
        //     component: HomePage,
        //     cssClass: 'cool-class'
        // });
        // res.present();
        const res = await this._toastCtrl.create({
            cssClass: 'my-cool-class',
            message: 'Oh Yeah!',
            duration: 600000,
            buttons: [
                {
                    cssClass: 'my-toast-button',
                    text: 'Close',
                    handler: () => {
                        console.log('clicked');
                        return true;
                    }
                }
            ]
        });
        res.present();
    }
}
