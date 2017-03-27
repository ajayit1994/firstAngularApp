import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/interfaces/product.interface';
import {AppProductService} from '../../shared/services/app-product.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent {

   products: Product[] = [];

  sort = 'name';
  search = '';

  constructor(private appProductService: AppProductService) { }

  ngOnInit() {
    this.appProductService.getProducts().then(products => { this.products = products; });
  }

}
