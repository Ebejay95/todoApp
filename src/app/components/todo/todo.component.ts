import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { TodoService } from "../../services/todo.service";

import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {

  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo) {

    //toggle in UI
    todo.complete = !todo.complete;

    //toggle on Server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
