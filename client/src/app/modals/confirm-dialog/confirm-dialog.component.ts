import { BsModalRef } from 'ngx-bootstrap/modal';
import { Message } from 'src/app/_models/message';
import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: [ './confirm-dialog.component.css' ]
} )
export class ConfirmDialogComponent implements OnInit
{
  title = '';
  message = '';
  btnOkText = '';
  btnCancelText = '';
  result = false;

  constructor ( public bsModalRef: BsModalRef ) { }

  ngOnInit(): void
  {
  }

  confirm()
  {
    this.result = true;
    this.bsModalRef.hide();
  }

  decline()
  {
    this.bsModalRef.hide();
  }

}
