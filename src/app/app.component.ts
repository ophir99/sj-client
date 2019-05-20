import { Component } from "@angular/core";
import { ItemsService } from "./items.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "client";
  items: string[];
  constructor(private itemService: ItemsService) {
    itemService.getItems().subscribe(
      res => {
        console.log("RES", res);
        this.items = res.items;
      },
      () => {},
      () => {}
    );
  }

  create(newItem) {
    this.itemService.createItems(newItem).subscribe(res => {
      console.log(res);
    });
  }
}
