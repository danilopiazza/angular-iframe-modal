import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalResult } from './modal-result.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private window: Window) { }

  ngOnInit() {
    const appWindow = this.window as AppWindow;
    appWindow.app = appWindow.app || {};
    appWindow.app.notifications = {
      show: (result: ModalResult) => this.activeModal.close(result)
    };
  }
}

interface AppWindow extends Window {
  app: any
}
