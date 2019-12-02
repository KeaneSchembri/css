import { Component } from '@angular/core';
import { IProduct } from '../product';
import { filter } from 'minimatch';

@Component({
  selector: 'pmapp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  cardTitle: string = 'Product List';
  productData: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://via.placeholder.com/400x400.png?text=Leaf Rake"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://via.placeholder.com/400x400.png?text=Garden Cart"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "https://via.placeholder.com/400x400.png?text=Hammer"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "https://via.placeholder.com/400x400.png?text=Saw"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "https://via.placeholder.com/400x400.png?text=Video Game Controller"
    }
  ];
  filteredProductData: IProduct[];

  productImageWidth: number = 80;
  productImageHeight: number = 80;
  isImageColumnVisible: boolean = true;
  _productListFilter: string;


  constructor() {
    this.filteredProductData = this.productData;
    this._productListFilter = '';
  }

  get productListFilter(): string {
    return this._productListFilter;
  }

  set productListFilter(value: string) {
    this._productListFilter = value;
    
    if (value == null || value.length === 0) {
      this.filteredProductData = this.productData;
    } else {
      this.filteredProductData = this.performFilter(value);
      console.log(this.filteredProductData.length);

    }
  }


  isTableVisible(): boolean {
    if (this.productData == null || this.productData.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  handleToggleImageButtonClickedEvent(): void {
    if (this.isImageColumnVisible == true) {
      this.isImageColumnVisible = false;
    } else {
      this.isImageColumnVisible = true;
    }
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.productData.filter((product: IProduct) => {
      return product.productName.toLowerCase().indexOf(filterBy) !== -1;
    });
  }


}