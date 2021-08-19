import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-input-emoji',
  templateUrl: './input-emoji.component.html',
  styleUrls: ['./input-emoji.component.scss'],
})
export class InputEmojiComponent implements OnInit {
  inputData = '';
  editedData = '';
  display = false;

  date = new Date().toISOString().slice(0, 10);

  data = this.sharedService.data;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  createTask() {
    if (this.inputData.length > 1) {
      this.data.unshift({
        taskTitle: this.inputData,
        timing: 'This task created on' + ' ' + this.date,
      });
      this.inputData = '';
    }
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
}
