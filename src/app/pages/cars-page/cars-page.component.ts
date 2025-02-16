import { Component, OnInit } from '@angular/core';
import { ICar } from '../../models/cars.interface';
import { CarsService } from '../../services/cars.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  standalone: false,
  styleUrl: './cars-page.component.scss'
})

export class CarsPageComponent implements OnInit {
  cars$: Observable<ICar[]>
  
  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.cars$ = this.carsService.getCars()
  }
}
