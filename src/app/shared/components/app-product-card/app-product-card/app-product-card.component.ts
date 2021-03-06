import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../../interfaces/product.interface'
import {AppProductService} from '../../../services/app-product.service';

@Component({
  selector: 'app-app-product-card',
  templateUrl: './app-product-card.component.html',
  styleUrls: ['./app-product-card.component.scss']
})
export class AppProductCardComponent implements OnInit {

@Input()
product : Product
constructor(private appProductService : AppProductService) { }

ngOnInit() {
  }

  addToCart(id : number, name : string) {
      this.appProductService.addProductToCart(id, name);
  }

}
