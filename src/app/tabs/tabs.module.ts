import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

/**
 * Own
 */
// modules
import { TabsPageRoutingModule } from "./tabs-routing.module";

// pages
import { TabsPage } from "./tabs.page";
import { CreateTodoComponent } from "./CreateTodo/CreateTodo.component";

@NgModule({
    imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule],
    declarations: [TabsPage, CreateTodoComponent],
    entryComponents: [CreateTodoComponent],
})
export class TabsPageModule {
    constructor() {
        // to do
    }
}
