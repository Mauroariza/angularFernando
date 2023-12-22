import { Component, inject } from '@angular/core';
import { formOptions } from 'src/app/config/options';
import { Todo, TodoStatus } from 'src/app/interfaces/todos.interfaces';
import { TodosService } from 'src/app/services/todos.service';

@Component({ 
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  private todosService = inject(TodosService);

  public newTodoDescription: string = '';
  public newTodoStatus: { value: TodoStatus; name: string } = formOptions[0]; //por qué formOptions está aquí? 
  //porque estoy escogiendo la primera opción del array de opciones 
  public statusOptions = formOptions; //statusOptions es el nombre de la variable que se usa en el html 
  //para mostrar las opciones de status 

  public addTodo() {
    const newTodo: Todo = {
      id: Math.random(),
      description: this.newTodoDescription,
      status: this.newTodoStatus.value,
      createdAt: new Date(),
    };

    this.todosService.addTodo(newTodo);

    this.newTodoDescription = '';
    this.newTodoStatus = formOptions[0];
  }

  public changeStatus(newStatus: { value: TodoStatus; name: string }) { // es un evento que se dispara cuando 
    //se selecciona una opción del dropdown de status
    this.newTodoStatus = newStatus;// aquí se agrega el estado nuevo a la variable newTodoStatus, 
    //es decir el nuevo estado
  }
}
//newStatus es una función que se ejecuta cuando se selecciona una opción del dropdown de status,
// y recibe como parámetro la opción seleccionada  (newStatus: { value: TodoStatus; name: string })
//statusoptions le envía las opciones de status al dropdown de status, y newTodoStatus es la opción 
//seleccionada en el dropdown de status 