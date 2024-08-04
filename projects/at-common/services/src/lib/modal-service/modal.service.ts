import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
    public dialog: MatDialog,
    public overlay: Overlay
  ) {}
  public isDialogOpen = false;

  ShowModal(component: ComponentType<unknown>, options?: {} | undefined) {
    var dialogOptions = { ...this.DefaultOptions(), ...options };
    if (this.isDialogOpen) return;
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(component, dialogOptions);
    dialogRef.afterClosed().subscribe(() => {
      this.isDialogOpen = false;
    });

    return dialogRef.afterClosed();
  }

  DefaultOptions() {
    return {
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      width: 'auto',
      height: 'auto'
    };
  }
}
