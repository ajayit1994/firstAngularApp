import { Component, OnInit } from '@angular/core';
import {Product} from './shared/interfaces/product.interface';
import {AppProductService} from './shared/services/app-product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    cartItemCount  : number;
    constructor(private appProductService : AppProductService) {

    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.appProductService.cartItemCount$.subscribe(count => this.cartItemCount = count);
        
    }
}
