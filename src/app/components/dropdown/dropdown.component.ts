import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown', // este es el nombre del componente que se usa en el html en el componente padre, colocarle app al inicio es convención
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
}) 
export class DropdownComponent {
  @Input() placeholder?: string;
  @Input() options: any[] = [];// se espera que venga desde el componente padre a través de la propiedad options 
  @Input() optionSelected?: any;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();//

  public open: boolean = false;// el estado de open se cambia a true cuando se hace click en el dropdown  

  public toggleDropdown() {
    this.open = !this.open;
  }

  public selectOption(option: any) {
    this.onSelect.emit(option);// option llega como event al componente padre
    this.open = false;
  }
}
//emit es un método que se usa para emitir un evento, en este caso el evento es onSelect,
// y el parámetro que recibe es option, que es la opción seleccionada en el dropdown 
//inicialmente options está vacío, pero se espera que venga desde el componente padre a través de la propiedad options