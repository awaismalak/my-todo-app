import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-input-emoji',
  templateUrl: './input-emoji.component.html',
  styleUrls: ['./input-emoji.component.scss'],
})
export class InputEmojiComponent implements OnInit {
  inputData = '';
  @Output() onEnter = new EventEmitter();
  @Input() defaultText = '';

  date = new Date().toISOString().slice(0, 10);

  data = this.sharedService.data;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.inputData += this.defaultText;
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
