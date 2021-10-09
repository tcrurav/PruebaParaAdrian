import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/Task';
import { TaskServicesService } from '../services/task-services.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {

  idTask: number;
  task: Task;

  constructor(private route: ActivatedRoute, private router: Router,
    private taskService: TaskServicesService) {  }

  ngOnInit() {
    this.task = new Task();
    this.idTask = this.route.snapshot.params['idTask']

    this.taskService.getTaskById(this.idTask)
      .subscribe(data => {
        console.log(data)
        this.task = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigateByUrl('/');
  }

}
