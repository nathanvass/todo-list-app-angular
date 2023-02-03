import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from '../shared/todo';

@Pipe({
  name: 'todoFilterPipe'
})
export class TodoFilterPipePipe implements PipeTransform {

  transform(todos: Todo[], done: boolean | null): Todo[] {
    return todos.filter(
      (t) =>
        done === null ||
        done === undefined ||
        (done === true && t.doneDate) ||
        (done === false && !t.doneDate)
    );
  }
  
  // transform(todos: Todo[], done: boolean | null): Todo[] { 
    // console.log(done); 
    
    // return todos.filter((t) =>{  
      // if (done === null) { 
        // return t.doneDate 
      // } 
      // return false 
      // done === null || done === undefined || (done === true && t.doneDate) || (done === false && !t.doneDate))
    // }   
    // ) 
  // }

}
