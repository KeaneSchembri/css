import { Component } from '@angular/core';
import { Property } from 'src/app/dto/property';

@Component({
    selector: 'property-list',
    templateUrl: './property-list.component.html',
    styleUrls: ['./property-list.component.css']
  })
  export class PropertyListComponent {

    propertyData: Property[] = [
        {
            'id': 1,
            'name': 'Ground floor flat',
            'type': 'Apartment',
            'askingPrice': 140000,
            'dateToBeCompleted': '12/12/2022',
            'numberOfBedrooms': 2,
            'area': 55,
            'image': 'https://via.placeholder.com/140x100'
        },
        {
            'id': 2,
            'name': 'Ground floor flat',
            'type': 'Apartment',
            'askingPrice': 150000,
            'dateToBeCompleted': '12/12/2022',
            'numberOfBedrooms': 2,
            'area': 55,
            'image': 'https://via.placeholder.com/140x100'
        },
        {
            'id': 3,
            'name': 'Ground floor flat',
            'type': 'Apartment',
            'askingPrice': 110000,
            'dateToBeCompleted': '12/12/2022',
            'numberOfBedrooms': 2,
            'area': 61,
            'image': 'https://via.placeholder.com/140x100'
        },
        {
            'id': 4,
            'name': 'Ground floor flat',
            'type': 'Apartment',
            'askingPrice': 125000,
            'dateToBeCompleted': '12/12/2022',
            'numberOfBedrooms': 2,
            'area': 60,
            'image': 'https://via.placeholder.com/140x100'
        },
        {
            'id': 5,
            'name': 'Ground floor flat',
            'type': 'Apartment',
            'askingPrice': 200000,
            'dateToBeCompleted': '12/12/2022',
            'numberOfBedrooms': 2,
            'area': 100,
            'image': 'https://via.placeholder.com/140x100'
        }                                
    ]

    filteredPropertyData: Property[];

    _priceFromFilter: number;
    _priceToFilter: number;

    get priceFromFilter(): number {
        return this._priceFromFilter;
    }

    set priceFromFilter(value: number) {
        this._priceFromFilter = value;
        this.filteredPropertyData = this.performFilter();
    }

    get priceToFilter(): number {
        return this._priceToFilter;
    }

    set priceToFilter(value: number) {
        this._priceToFilter = value;
        this.filteredPropertyData = this.performFilter();
    }

    constructor() {
        this.filteredPropertyData = this.propertyData;
    }

    handleAddButtonClickedEvent() {
        let p = new Property(7, 'First Floor Apartment', 'Apartment', 119000, '11/12/2021', 1, 52, 'https://via.placeholder.com/140x100');
        this.propertyData.push(p);
        this.filteredPropertyData = this.performFilter();
    }

    performFilter(): Property[] {
        if (this.priceFromFilter == null && this.priceToFilter == null) {
            return this.propertyData;
        }

        return this.propertyData.filter((p: Property) =>  {
            let toAdd = true;

            if (this.priceFromFilter != null && p.askingPrice < this.priceFromFilter) {
                toAdd = false;
            }
            else if (this.priceToFilter != null && p.askingPrice > this.priceToFilter) {
                toAdd = false;
            }

            return toAdd;
        
        });
    }

  }