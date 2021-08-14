import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private sharedService: SharedService,
    private dialog: MatDialog
  ) {}
  title = 'My todo App';
  inputData = '';
  editeddata = '';

  data = this.sharedService.data;

  createTask() {
    if (this.inputData.length > 1) {
      this.data.unshift({
        taskTtle: this.inputData,
        timing: 'this is auto ginrated',
      });
      this.inputData = '';
    }
  }
  deleteTask(index: any) {
    this.data.splice(index, 1);
  }

  openDialog() {
    this.dialog
      .open(EditTaskComponent)
      .afterClosed()
      .subscribe((data) => (this.editeddata = data));
  }
}
