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
    constructor() {}

    public async createAlert(): Promise<void> {}
}
