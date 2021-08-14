import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  itemIndex?: number;
  text: string = '';

  constructor(
    private dialog: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { index: number },
    public service: SharedService
  ) {
    this.itemIndex = data.index;
    this.text = this.itemToEdit.taskTtle;
  }

  get itemToEdit(): any {
    return this.itemIndex != undefined ? this.service.data[this.itemIndex] : {};
  }

  ngOnInit(): void {}

  save() {
    if (this.itemIndex != undefined) {
      this.service.data[this.itemIndex].taskTtle = this.text;
      this.dialog.close();
    }
  }
}
