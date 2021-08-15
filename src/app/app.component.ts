import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditTaskComponent } from './common/components/dialogs/edit-task/edit-task.component';
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
  editedData = '';

  data = this.sharedService.data;

  createTask() {
    if (this.inputData.length > 1) {
      this.data.unshift({
        taskTitle: this.inputData,
        timing: 'this is auto genrated',
      });
      this.inputData = '';
    }
  }
  deleteTask(index: any) {
    this.data.splice(index, 1);
  }

  openDialog(index: any) {
    var d = new Date().toISOString().slice(0, 10);

    alert(d);

    this.dialog.open(EditTaskComponent, { data: { index } });
  }
}
