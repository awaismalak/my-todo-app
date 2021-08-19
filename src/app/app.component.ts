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
  display = false;

  date = new Date().toISOString().slice(0, 10);

  data = this.sharedService.data;

  urlData = this.sharedService.passData();

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

  openDialog(index: any) {
    this.dialog.open(EditTaskComponent, { data: { index } });
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
    console.log(this.urlData);
  }
}
