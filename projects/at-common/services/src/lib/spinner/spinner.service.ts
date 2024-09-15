import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { AtSpinnerComponent } from './components/at-spinner/at-spinner.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private overlayRef: OverlayRef | null = null;

  constructor(private overlay: Overlay) {}

  showSpinner() {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }
    const spinnerOverlayPortal = new ComponentPortal(AtSpinnerComponent);
    if (!this.overlayRef.hasAttached()) this.overlayRef.attach(spinnerOverlayPortal);
  }

  hideSpinner() {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
