import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditTaskComponent } from './common/components/dialogs/edit-task/edit-task.component';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  date = new Date().toISOString().slice(0, 10);
  data = this.sharedService.data;
  tasks: any = [];

  constructor(
    private sharedService: SharedService,
    private dialog: MatDialog
  ) {}
  title = 'My todo App';
  inputData = '';
  editedData = '';
  display = false;

  createTask() {
    if (this.inputData.length > 1) {
      this.data.unshift({
        taskTitle: this.inputData,
        timing: 'This task created on' + ' ' + this.date,
      });
      this.inputData = '';
    }
  }
  deleteTask(index: any) {
    this.data.splice(index, 1);
  }

  openDialog(task: any) {
    this.dialog.open(EditTaskComponent, { data: { task } });
  }

  emojisHideShow() {
    var emojisDisplay: any = document.getElementById('emojisContainer');

    if (emojisDisplay.style.display === 'none') {
      emojisDisplay.style.display = 'block';
    } else {
      emojisDisplay.style.display = 'none';
    }
  }

  addEmoji(event: any) {
    this.inputData = this.inputData + ' ' + event.emoji.native;
    var emojisDisplay: any = document.getElementById('emojisContainer');
    emojisDisplay.style.display = 'none';
  }

  myFunction2() {
    alert('Testing Button');
    console.log(this.tasks);
  }

  async ngOnInit() {
    await this.sharedService.getTasks().then((data) => {
      this.tasks = data;
    });
  }
}
