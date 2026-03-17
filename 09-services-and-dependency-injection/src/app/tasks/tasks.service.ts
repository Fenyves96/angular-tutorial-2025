<<<<<<< HEAD
import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';
=======
import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
>>>>>>> b263252b4aed2badaff37e3f4206e0748365f79b

export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loggingService.log('ADDED TASK WITH TITLE' + taskData.title);
  }

  updateTaskStatus(taksId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taksId ? { ...task, status: newStatus } : task,
      ),
    );
    this.loggingService.log('UPDATE TASK WITH STATUS' + newStatus);
  }

  updateTaskStatus(taksId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taksId ? { ...task, status: newStatus } : task,
      ),
    );
  }
}
