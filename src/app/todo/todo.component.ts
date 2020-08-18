import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
// this: refers to a property
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'fold laundry',
      completed: false,
    },
    {
      task: 'exercise',
      completed: false,
    },
    {
      task: 'do dishes',
      completed: true,
    },
    {
      task: 'eat breakfast',
      completed: false,
    },
  ];
  searchTerm: string;

  showIndex: number;

  constructor() {}
  // to edit tasks
  setShowIndex(index: number) {
    this.showIndex = index;
  }

  resetShowIndex() {
    this.showIndex = undefined;
  }

  submitForm(form: NgForm) {
    let addTask: Todo = {
      task: form.value.task,
      completed: false,
    };
    this.todos.push(addTask);
    form.reset();
  }
  // delete button
  //  index: to detect whichone you're deleting
  removeTask(index: number) {
    this.todos.splice(index, 1);
  }
  completeTask(index: number) {
    this.todos[index].completed = true;
  }
  setSearchTerm(form: NgForm) {
    this.searchTerm = form.value.searchTerm.trim().toLowerCase();
  }
  //  filter(): will make a new array based off a condition, whether something is true or false
  filter() {
    if (!this.searchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => {
        let currentTask = todo.task.toLowerCase().trim();
        // includes: compares strings that evaluates to true or false
        return currentTask.includes(this.searchTerm);
      });
    }
  }

  ngOnInit(): void {}
}
