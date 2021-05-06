export interface ITask {
    description: string;
    state: boolean;
}

export class Task implements ITask {
    id: number;
    description: string;
    state: boolean;

    constructor(data?: ITask) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data['id'];
            this.description = data['description'];
            this.state = data['state'];
        }
    }

    static fromJS(data: any): Task {
        data = typeof data === 'object' ? data : {};
        let result = new Task();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['id'] = this.id;
        data['description'] = this.description;
        data['state'] = this.state;
        return data;
    }

    clone(): Task {
        const json = this.toJSON();
        let result = new Task();
        result.init(json);
        return result;
    }
}
