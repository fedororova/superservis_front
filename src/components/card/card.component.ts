import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LoadInfModalComponent } from '../load-inf-modal/load-inf-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  title = 'DIPLOM';

  constructor(public modalService: NzModalService){}
  public showModal(): void {
    this.modalService.create({
      nzTitle: 'Получение услуги',
      nzContent: LoadInfModalComponent
    });
  }
}