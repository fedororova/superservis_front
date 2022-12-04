import { Component } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-load-inf-modal',
  templateUrl: './load-inf-modal.component.html',
  styleUrls: ['./load-inf-modal.component.css']
})
export class LoadInfModalComponent {
  title = 'DIPLOM';
  constructor(private modal: NzModalRef){}
  public destroyModal(): void {
    this.modal.destroy();
  }
}