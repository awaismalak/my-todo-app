import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
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
}
