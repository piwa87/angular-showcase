import { Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ModalService } from '@at-common/services';
import { Subject, takeUntil } from 'rxjs';
import { AtChecklistModalTemplateComponent } from './templates/at-checklist-modal-template/at-checklist-modal-template.component';
import { AtModalTemplateComponent } from './templates/at-modal-template/at-modal-template.component';
import { AtSelectModalTemplateComponent } from './templates/at-select-modal-template/at-select-modal-template.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnDestroy {
  /**
   *
   */
  constructor(private modalService: ModalService) {}

  destroyed$ = new Subject<void>();
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  showSelectModal() {
    const data = {
      title: 'Select something',
      content: 'This is my content',
      selectLabel: 'select',
      selectOptions: [
        { key: 'key1', value: 'Value1' },
        { key: 'key2', value: 'Value2' },
        { key: 'key3', value: 'Value3' }
      ],
      btnConfirmText: 'Do it',
      btnCancelText: 'No'
    };

    this.modalService
      .ShowModal(AtSelectModalTemplateComponent, { minWidth: '551px', minHeight: '228px', data: data })
      ?.pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        console.log('selected value: ', data);
      });
  }

  showCheckboxModal() {
    const data = {
      fortrydButton: 'Nope',
      tilfoejButton: 'yep',
      items: [
        {
          id: 'id_1',
          displayText: 'ost',
          selected: false,
          disabled: false
        },
        {
          id: 'id_2',
          displayText: 'bacon',
          selected: true,
          disabled: true
        },
        {
          id: 'id_3',
          displayText: 'salat',
          selected: false,
          disabled: true
        }
      ]
    };

    this.modalService
      .ShowModal(AtChecklistModalTemplateComponent, { minWidth: '710px', minHeight: 'auto', data: data })
      ?.pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        console.log('Checked items: ', data);
      });
  }

  showTextMessageModal() {
    const data = {
      title: 'Hello',
      content: 'you look really pretty today.',
      innerHTML: false,
      buttonText: 'thanks'
    };

    this.modalService
      .ShowModal(AtModalTemplateComponent, { maxWidth: '652px', minHeight: 'auto', data: data })
      ?.pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {});
  }

  showHtmlMessageModal() {
    const data = {
      title: 'Hello',
      content: ' <p>You look <strong>really</strong> pretty today.</p>',
      innerHTML: true,
      buttonText: 'thanks'
    };

    this.modalService
      .ShowModal(AtModalTemplateComponent, { maxWidth: '652px', minHeight: 'auto', data: data })
      ?.pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {});
  }
}
