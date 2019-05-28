import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ItemsService {
  BASEURL: string;
  constructor(private http: HttpClient) {
    this.BASEURL = "http://localhost:9090/items";
  }

  getItems() {
    return this.http.get(`${this.BASEURL}/all`);
    // http://localhost:9090/items/all
  }

  createItems(newItem) {
    return this.http.post(`${this.BASEURL}/new`, newItem);
    // http://localhost:9090/items/new
  }

  deleteItem(id: string) {
    return this.http.delete(`${this.BASEURL}/delete/${id}`);
    // http://localhost:9090/items/delete/ggfdfddf54545
  }

  updateItem(id: string, data: any) {
    return this.http.put(`${this.BASEURL}/update/${id}`, data);
    // http://localhost:9090/items/update/ggfdfddf54545
  }
}
