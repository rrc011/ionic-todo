import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalStorageService } from 'ngx-localstorage';
import { Task } from 'src/core/models/todo';
import { taskConst } from 'src/core/constants/task.constant';
import { TodoService } from 'src/core/services/todo.service';

@Component({
    selector: 'app-CreateTodo',
    templateUrl: './CreateTodo.component.html',
    styleUrls: ['./CreateTodo.component.css'],
})
export class CreateTodoComponent implements OnInit {
    lstTask: Task[] = [];
    task: Task = new Task();

    constructor(
        public modalController: ModalController,
        private _storageService: LocalStorageService,
        private _taskService: TodoService
    ) {
        this.getTasks();
    }

    save() {
        this.task.state = false;
        this.lstTask.push(this.task);
        this._taskService.save(this.lstTask);
        this.getTasks();
        this.task = new Task();
        this.dismissModal();
    }

    ngOnInit() {}

    dismissModal() {
        this.modalController.dismiss({
            dismissed: true,
        });
    }

    getTasks() {
        this._taskService.getTasks().then((t) => {
            this.lstTask = t;
        });
    }
}
