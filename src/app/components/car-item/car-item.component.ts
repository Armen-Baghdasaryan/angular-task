import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICar } from '../../models/cars.interface';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  standalone: false,
  styleUrl: './car-item.component.scss'
})
export class CarItemComponent {
  @Input() car: ICar

  constructor(private carsService: CarsService) { }

  onImageClick(images: string[]) {
    this.carsService.setImages(images)
    this.carsService.toggleModalState(true)
  }
}
