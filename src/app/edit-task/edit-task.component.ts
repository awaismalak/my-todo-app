import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  editedText = '';
  myData: { taskTtle?: string; timing?: string } = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: { serviceData: {} }) {
    this.myData = data.serviceData;
  }

  ngOnInit(): void {}
  closeDialog() {
    alert(this.editedText);
  }
}
