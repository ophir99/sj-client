import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ItemsService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get("http://localhost:9090/items");
  }

  createItems(newItem) {
    return this.http.post("http://localhost:9090/items", {
      item: newItem
    });
  }
}
