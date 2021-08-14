import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from './edit-task/edit-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}
  title = 'My todo App';
  inputData = '';

  data = [
    {
      taskTtle: 'work',
      timing: '10 days ago',
    },
    {
      taskTtle: 'cricket',
      timing: '12 days ago',
    },
    {
      taskTtle: 'hockey',
      timing: '13 days ago',
    },
    {
      taskTtle: 'football',
      timing: '14 days ago',
    },
  ];

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
    this.dialog.open(EditTaskComponent);
  }
}
