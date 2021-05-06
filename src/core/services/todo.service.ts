import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { Task } from '../models/todo';
import { taskConst } from 'src/core/constants/task.constant';

@Injectable({ providedIn: 'root' })
export class TodoService {
    constructor(private _storageService: LocalStorageService) {}

    save(task: Task[]) {
        task.forEach((task) => (task.id = Math.floor(Math.random() * 100)));
        this._storageService.set(taskConst.TAKS, task);
    }

    getTasks(): Promise<Task[]> {
        return this._storageService
            .asPromisable()
            .get(taskConst.TAKS)
            .then((r) => {
                return r ? r : [];
            });
    }
}
