import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public todos: Todo[] = [];

  private userUid = '';
  private todoSubscription: Subscription = Subscription.EMPTY;

  constructor(public firestore: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(state => {
    if (state?.uid) {
      this.userUid = state.uid;

      this.todoSubscription = this.firestore.collection<any>(
        'todos', ref => {
          return ref.where('userUid', '==', state.uid);
        }).snapshotChanges().subscribe(data => {
          this.todos = data
            .map(e => {
              return {
                id: e.payload.doc.id,
                ...e.payload.doc.data()
              } as Todo;
            })
            .sort((a, b) => {
              return a.dueDate > b.dueDate ? 1 : -1;
            });
        });
    } else {
      if (this.todoSubscription) {
        this.todoSubscription.unsubscribe();
      }

      this.userUid = '';
      this.todos = [];
    }
  });
 }

 public addTodo(description: string, dueDate: Date): void {
  this.firestore.collection('todos').add({ description: description, dueDate: dueDate, userUid: this.userUid });
}

public deleteTodoById(id: string): void {
  this.firestore.doc('todos/' + id).delete();
}

public updateTodoById(todo: Todo): void {
  this.firestore.doc('todos/' + todo.id).update({ description: todo.description, dueDate: todo.dueDate });
}

public toggleDoneStateById(todo: Todo): void {
  this.firestore.doc('todos/' + todo.id).update({ doneDate: todo.doneDate ? null : new Date() });
}

public translateToDoById(id: string, translatedText: string): void {
  const item = this.todos.find((item: Todo) => item.id === id);
  item!.description = translatedText;
}

}
