import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todoList: TodoItem[] = [];
  task: string = '';

  constructor() {

  }

  ngOnInit(): void {
    this.todoList.push({
      id: 1,
      task: 'Run 10KM',
      done: false
    });

    this.todoList.push({
      id: 2,
      task: 'Buy vege',
      done: true
    });
  }

  addTodoItem(): void {
    if (!this.task) {
      alert('Task cannot be empty!');
      return;
    }

    this.todoList.push({
      id: this.getNextTodoItemId(),
      task: this.task,
      done: false
    });

    this.task = '';
  }

  todoItemChanged(todoItem: TodoItem): void {
    // find the todo item in todo list 
    let selectedTodoItem = this.todoList.filter(x => x.id == todoItem.id)[0];

    // and update the todo item
    selectedTodoItem.done = todoItem.done;
  }

  todoItemDeleted(todoItem: TodoItem): void {
    // find the todo item
    let selectedTodoItem = this.todoList.filter(x => x.id == todoItem.id)[0];

    // get the index
    let index = this.todoList.indexOf(selectedTodoItem);

    // remove the item from the list
    this.todoList.splice(index);
  }

  private getNextTodoItemId(): number {
    let ids = this.todoList.map(x => x.id);
    if (!ids.length) return 1;

    let latestId = Math.max(...ids);
    return latestId++;
  }

}
