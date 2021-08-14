import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { config } from 'rxjs';
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
  editeDdata = '';

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

  openDialog(index: any) {
    let test = this.data.forEach((item, itemIndex) => {
      if (itemIndex === index) {
        let config: MatDialogConfig = {
          data: { serviceData: item },
        };
        this.dialog
          .open(EditTaskComponent, config)
          .afterClosed()
          .subscribe((data) => (this.editeDdata = data));
      }
    });
  }
}
