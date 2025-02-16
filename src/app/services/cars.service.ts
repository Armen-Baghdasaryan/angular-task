import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { ICar } from "../models/cars.interface";

@Injectable({
    providedIn: 'root'
})

export class CarsService {
    constructor() { }
    public images = new BehaviorSubject<string[]>([]);
    public modalState = new BehaviorSubject<boolean>(false);

    // Instead of BE data
    getCars(): Observable<ICar[]> {
        return of([
            {
                model: 'Nissan Tiida',
                year: '2008',
                price: '$ 5600',
                description: 'About Nissan Description',
                isUrgently: true,
                images: [
                    "assets/images/nissan-1.webp",
                    "assets/images/nissan-2.webp",
                    "assets/images/nissan-3.webp",
                    "assets/images/nissan-4.webp",
                    "assets/images/nissan-5.webp",
                    "assets/images/nissan-6.webp"
                ],
            },
            {
                model: 'Toyota Camry',
                year: '2023',
                price: '$ 28000',
                description: 'About Toyota Description. More Description about ...',
                isUrgently: false,
                images: [
                    "assets/images/camry-1.webp",
                    "assets/images/camry-2.webp",
                    "assets/images/camry-3.webp",
                ],
            },
        ]);
    }

    setImages(arr: string[]): void {
        this.images.next(arr);
    }

    toggleModalState(state: boolean) {
        this.modalState.next(state)
    }
}