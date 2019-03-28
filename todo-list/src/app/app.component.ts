import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IPerson {
  name: string;
}

interface ITodoItem {
  id: number;
  assignedTo?: string;
  description: string;
  done?: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  people: IPerson[] = [];
  todos: ITodoItem[] = [];
  newItemDesc: string;
  assignedPerson: IPerson;

  constructor(private http: HttpClient) {
    this.newItemDesc = "";
    this.getPeople();
  }

  getTodos() {
    this.http.get<ITodoItem[]>('http://localhost:8081/api/todos').subscribe(resp => {
      this.todos = resp;
      console.log(resp);
    });
  }

  getPeople() {
    this.http.get<IPerson[]>('http://localhost:8081/api/people').subscribe(resp => {
      this.people = resp;
      console.log(resp);
    });
  }

  addItem() {
    console.log("added new Item: " + this.newItemDesc);
  }

}