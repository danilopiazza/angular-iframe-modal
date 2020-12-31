import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ModalResult } from '../modal/modal-result.model';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  modalResult: string | false = false;

  constructor(private modalService: NgbModal, private toastr: ToastrService) { }

  openModal() {
    const modalRef = this.modalService.open(ModalComponent, { backdrop: 'static' });
    this.modalResult = false;
    modalRef.closed.subscribe((result: ModalResult) => {
      this.modalResult = result.type;
      switch (result.type) {
        case 'success': this.toastr.success(result.message, result.title); break;
        case 'failure': this.toastr.error(result.message, result.title); break;
      }
    });
  }
}
