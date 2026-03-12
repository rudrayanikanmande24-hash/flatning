import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductsService } from '../../service/products.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { IProducts } from '../../model/prod';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss']
})
export class ProductsSearchComponent implements OnInit {

  serchControl: FormControl = new FormControl('');
  productsArr: IProducts[] = [];
 
  constructor(
    private _productService: ProductsService
  ) { }
  
  ngOnInit(): void {
    this.onSearchProduct();   
  }
  
  onSearchProduct(){
    this.serchControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(val => this._productService.fetchSearchProduct(val))
      )
      .subscribe({
        next:(data:any)=>{
          console.log(data);
          this.productsArr = data.products;   
        }
      })
  }
}