import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  
  @Input()
  todoItem: TodoItem;

  @Output()
  todoItemChanged = new EventEmitter<TodoItem>();

  @Output()
  todoItemDeleted = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {
  }

  isDoneChanged(): void {
    this.todoItemChanged.emit(this.todoItem);
  }

  deleteTodoItem(): void {
    this.todoItemDeleted.emit(this.todoItem);
  }
}
