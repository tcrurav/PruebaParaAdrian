import { Component, OnInit } from '@angular/core';
import { TaskServicesService } from '../services/task-services.service';
import { Task } from '../models/Task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  task: Task = new Task();
  submitted = false;
  error = false;
  
  constructor(private taskService: TaskServicesService, 
    private router: Router) { 
    }

  ngOnInit() {
  }

  save() {
    if (this.task.nameTask == "" || this.task.idSubject == null
      || this.task.dateTask == "" || this.task.descriptionTask == "") {

        console.log("false")
        this.error = true;
        this.gotoTasks();
        
      } else {

        this.taskService
        .createTask(this.task).subscribe(data => {
          console.log(data)
          this.task = new Task();
          this.submitted = true;
          this.gotoTasks();
        },
        errorMessage => console.log(errorMessage))
      }
  }

  onSubmit() {
    this.save();
  }

  gotoTasks() {
    if (this.submitted == true) {
      setTimeout(() => {  window.location.reload(); }, 2000);
    } else {
      console.log("aqui estoy")
      setTimeout(() => {  window.location.reload(); }, 2000);
    }
  }

  return() {
    this.router.navigate(['/']);
  }
}
