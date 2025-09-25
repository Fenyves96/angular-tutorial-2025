import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from './dummy-tasks';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  isAddingNewTask = false;
  tasks = DUMMY_TASKS;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingNewTask = true;
  }
  onCloseAddTask() {
    this.isAddingNewTask = false;
  }
}
