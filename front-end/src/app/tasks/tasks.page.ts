import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { $ } from 'protractor';
import { Task } from '../models/Task';
import { TaskServicesService } from '../services/task-services.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  public tasks: Array<Task> = [];
  public myTask: Task;

  constructor(private taskService: TaskServicesService, private router: Router, route: ActivatedRoute) {

    route.params.subscribe((x) => {
      this.loadInfo()
    })

  }

  ngOnInit(): void {
  }

  loadInfo() {
    this.taskService.getTasks().subscribe((b: Array<Task>) => {
      this.tasks = b;
    })

    this.taskService.getTaskById(1).subscribe((b: Task) => {
      this.myTask = b;

      console.log(b.subject.nameSubject)
    });
  }

  addAnotherTask() {
    this.router.navigateByUrl("/create");
  }

  modifyTask(idTask: number) {
    this.router.navigateByUrl(`/modify/${idTask}`)
  }

  deleteTask(idTask: number) {
    this.taskService.deleteTask(idTask).subscribe(() => {
      this.loadInfo();
    });
  }

  taskDetails(idTask: number){
    this.router.navigateByUrl(`/task-details/${idTask}`);
  }

}
