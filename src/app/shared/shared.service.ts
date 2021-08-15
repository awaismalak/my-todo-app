import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  data = [
    {
      taskTitle: 'work',
      timing: '10 days ago',
    },
    {
      taskTitle: 'cricket',
      timing: '12 days ago',
    },
    {
      taskTitle: 'hockey',
      timing: '13 days ago',
    },
    {
      taskTitle: 'football',
      timing: '14 days ago',
    },
  ];
}
