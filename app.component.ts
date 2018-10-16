import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List Tasks';
  TaskList = [];
  countTasks = 0;
  task = '';
  addTask(){
	  if(this.task != ''){
		this.TaskList.push(this.task);
		this.countTasks = this.TaskList.length;
		this.task = '';
	}
  }
  
  removeTask(index){
		this.TaskList.splice(index, 1);
		//this.countTasks = this.TaskList.length;
  }
}
