import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FooService {
    public doSomethingLong(): Promise<boolean> {
        // Pretend to do something that takes some time
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(true), 3000);
        });
    }
}
