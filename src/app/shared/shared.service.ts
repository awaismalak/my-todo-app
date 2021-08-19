import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  data = [
    {
      taskTitle: 'work',
      timing: 'This task created on 2021-08-12',
    },
    {
      taskTitle: 'cricket',
      timing: 'This task created on 2021-08-13',
    },
    {
      taskTitle: 'hockey',
      timing: 'This task created on 2021-08-14',
    },
    {
      taskTitle: 'football',
      timing: 'This task created on 2021-08-15',
    },
  ];

  getTasks() {
    return fetch('https://113eb160d73e.ngrok.io/tasks').then((res) =>
      res.json()
    );
  }
}
