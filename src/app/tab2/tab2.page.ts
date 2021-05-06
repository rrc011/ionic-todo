import { Component } from '@angular/core';
import { Task } from 'src/core/models/todo';
import { TodoService } from 'src/core/services/todo.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
    lstTask: Task[] = [];
    Task: Task[] = [];

    constructor(private _taskService: TodoService) {
        this.getTasks();
    }

    getTasks(event?) {
        this._taskService.getTasks().then((t) => {
            this.lstTask = t.filter((t) => t.state == true);
            this.Task = t;
            if (event) event.target.complete();
        });
    }

    pendingTask(item: Task) {
        let index = this.Task.indexOf(item);
        this.Task[index].state = false;
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
