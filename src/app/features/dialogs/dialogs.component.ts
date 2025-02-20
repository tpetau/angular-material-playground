import { Component, inject, ViewChild } from '@angular/core';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { Dialog } from '@angular/cdk/dialog';
import { FullscreenOverlayContainer, Overlay, OverlayConfig, OverlayContainer } from '@angular/cdk/overlay';
import { ModalComponent } from "./components/modal/modal.component";
import { DialogComponent } from "./components/dialog/dialog.component";

@Component({
  selector: 'app-dialogs',
  imports: [ModalComponent, DialogComponent, PortalModule],
  templateUrl: './dialogs.component.html',
  styleUrl: './dialogs.component.scss',
  providers: [{ provide: OverlayContainer, useClass: FullscreenOverlayContainer }]
})
export class DialogsComponent {

  @ViewChild(CdkPortal) portal !: CdkPortal;
  dialog = inject(Dialog);

  constructor(private overlay: Overlay) { }

  /**
   *Dialog 
   */
  openDialog(): void {

    const dialogRef = this.dialog.open(DialogComponent, {
      hasBackdrop: true,
      disableClose: true
    });

    dialogRef.closed.subscribe(() => {
      console.log("dialog closed");
    });
  }

  /**
   *Modal with Overlay and Portal
   */
  openModal(): void {
    const config = new OverlayConfig({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true,
    });

    const overlayRef = this.overlay.create(config);
    overlayRef.attach(this.portal);

    overlayRef.keydownEvents().subscribe(kdE => {
      if (kdE.key === "Escape") {
        overlayRef.detach();
      }
    });

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    })
  }
}
