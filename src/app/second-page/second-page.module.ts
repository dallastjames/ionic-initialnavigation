import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SecondPagePage, CanDeactivatePage } from './second-page.page';

const routes: Routes = [
    {
        path: '',
        component: SecondPagePage,
        canDeactivate: [CanDeactivatePage]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SecondPagePage]
})
export class SecondPagePageModule {}
