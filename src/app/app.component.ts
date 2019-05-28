import { Component } from "@angular/core";
import { ItemsService } from "./items.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "client";
  items: any[];
  itemForm: FormGroup;
  itemUpdateForm: FormGroup;
  currentItemId: string;
  constructor(private itemService: ItemsService) {
    this.itemForm = new FormGroup({
      name: new FormControl(),
      type: new FormControl()
    });
    this.itemUpdateForm = new FormGroup({
      name: new FormControl(),
      type: new FormControl()
    });

    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(
      (res: any) => {
        console.log("RESULT", res);
        this.items = res.result;
      },
      () => {},
      () => {}
    );
  }
  create() {
    this.itemService.createItems(this.itemForm.value).subscribe(res => {
      console.log(res);
    });
  }

  delete(id: string) {
    this.itemService.deleteItem(id).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  edit(item: any) {
    // const name = item.name;
    // const type = item.type;

    const { name, type, _id } = item;
    this.currentItemId = _id;
    this.itemUpdateForm.setValue({ name, type });
  }

  update() {
    console.log(this.itemUpdateForm.value);
    this.itemService
      .updateItem(this.currentItemId, this.itemUpdateForm.value)
      .subscribe(
        res => {
          console.log(res);
          console.log("ITEM ID", this);
          for (let i = 0; i < this.items.length; i++) {
            if (this.items[i]._id === this.currentItemId) {
              this.items[i].name = this.itemUpdateForm.value.name;
              this.items[i].type = this.itemUpdateForm.value.type;
            }
          }
        },
        function(err) {
          console.log(err);
        },
        () => {
          let x = "Simple text";
          console.log("ITEM ID from Complete block", this, x);

          console.log("Done");
        }
      );
  }
}
