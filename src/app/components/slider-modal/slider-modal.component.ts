import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-slider-modal',
    templateUrl: './slider-modal.component.html',
    standalone: false,
    styleUrl: './slider-modal.component.scss'
})
export class SliderModalComponent implements OnInit, OnDestroy {
    images: string[] = [];
    modalState: boolean = false;
    imgIndex: number = 0;
    isFading: boolean = false;
    startTouch: number = 0;
    isSwiping: boolean = false;

    private imagesSubscription: Subscription;
    private modalStateSubscription: Subscription;

    constructor(private carsService: CarsService) { }

    ngOnInit(): void {
        this.imagesSubscription = this.carsService.images.subscribe(images => {
            this.images = images;
        });

        this.modalStateSubscription = this.carsService.modalState.subscribe(state => {
            this.modalState = state
        })
    }

    ngOnDestroy(): void {
        if (this.imagesSubscription || this.modalStateSubscription) {
            this.imagesSubscription.unsubscribe();
            this.modalStateSubscription.unsubscribe();
        }
    }

    handleClose() {
        this.carsService.toggleModalState(false)
    }

    changeImages(index: number) {
        this.isFading = true
        setTimeout(() => {
            this.imgIndex = index
            this.isFading = false;
        }, 150)
    }

    onSLideImgClick(index: number) {
        this.changeImages(index)
    }

    handleSlide(action: string) {
        action === 'next' ? this.changeImages(this.imgIndex + 1) : this.changeImages(this.imgIndex - 1)
    }

    handleTouchStart(e: TouchEvent) {
        const touchStart = e.touches[0].clientX;
        this.startTouch = touchStart
        this.isSwiping = false
    }

    handleTouchMove(e: TouchEvent) {
        const touchMove = e.touches[0].clientX;
        if (this.startTouch) {
            const swipeDistance = touchMove - this.startTouch;
            if (Math.abs(swipeDistance) > 50 && !this.isSwiping) {
                this.isSwiping = true
                if (swipeDistance > 0 && this.imgIndex > 0) {
                    this.changeImages(this.imgIndex - 1)
                } else if (swipeDistance < 0 && this.imgIndex < this.images.length - 1) {
                    this.changeImages(this.imgIndex + 1)
                }
            }
        }
    }

    handleTouchEnd(e: TouchEvent) {
        this.isSwiping = false
    }
}
