import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  active = '';

  NAV = [
    {
      name: 'Task',
      link: '/home/tasks',
      icon: 'person-circle'
    },
    {
      name: 'Forum',
      link: '/home/forum',
      icon: 'albums'
    }
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url
    })
  }

  ngOnInit() { }

}
