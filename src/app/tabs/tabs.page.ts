import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CreateTodoComponent } from "./CreateTodo/CreateTodo.component";

@Component({
    selector: "app-tabs",
    templateUrl: "tabs.page.html",
    styleUrls: ["tabs.page.scss"],
})
export class TabsPage {
    constructor(public modalController: ModalController) {
        // to do
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: CreateTodoComponent,
        });
        return await modal.present();
    }
}
