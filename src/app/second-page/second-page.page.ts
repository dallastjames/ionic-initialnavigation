import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanDeactivate,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { NavController, AlertController } from '@ionic/angular';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
export interface CanComponentDeactivate {
    canDeactivate: () => Promise<boolean>;
}

@Injectable({ providedIn: 'root' })
export class CanDeactivatePage
    implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(
        component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}

@Component({
    selector: 'app-second-page',
    templateUrl: './second-page.page.html',
    styleUrls: ['./second-page.page.scss']
})
export class SecondPagePage implements OnInit, CanComponentDeactivate {
    private alert: HTMLIonAlertElement;

    public isFormDirty: boolean = false;

    constructor(
        private navCtrl: NavController,
        private alertCtrl: AlertController
    ) {}

    async ngOnInit() {
        this.alert = await this.alertCtrl.create({
            message: 'Are you sure you want to go back without saving?',
            buttons: [
                {
                    role: 'cancel',
                    text: 'Cancel'
                },
                {
                    role: 'confirm',
                    // tslint:disable-next-line: quotemark
                    text: "Yes, I'm sure"
                }
            ]
        });
    }

    goBack(): void {
        this.navCtrl.back();
    }

    async canDeactivate(): Promise<boolean> {
        if (this.isFormDirty) {
            const confirmed = await this._confirm();
            return confirmed;
        } else {
            // form is not dirty
            return true;
        }
    }

    private async _confirm(): Promise<boolean> {
        const alert = this.alert;
        await alert.present();
        const res = await alert.onDidDismiss();
        return res.role === 'confirm';
    }
}
