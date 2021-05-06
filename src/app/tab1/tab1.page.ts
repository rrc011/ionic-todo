import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from 'src/core/models/todo';
import { TodoService } from 'src/core/services/todo.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
    lstTask: Task[] = [];
    Task: Task[] = [];

    constructor(private _taskService: TodoService) {
        this.getTasks();
    }

    getTasks(event?) {
        this._taskService.getTasks().then((t) => {
            this.lstTask = t.filter((t) => t.state == false);
            this.Task = t;
            if (event) event.target.complete();
        });
    }

    doneTask(item: Task) {
        let index = this.Task.indexOf(item);
        this.Task[index].state = true;
        this._taskService.save(this.Task);
        this.getTasks();
    }

    deleteTask(item: Task) {
        let index = this.Task.indexOf(item);
        this.Task.splice(index, 1);
        this._taskService.save(this.Task);
        this.getTasks();
    }
}
