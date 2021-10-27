import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
type inputType= 'text'| 'email' | 'number';
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  modelInput = '';
  @Input()
  fieldType:inputType = 'text';
  @Input()
  id:string = 'id';
  @Input()
  labelText:string = '';
  @Output()
  EmitSource = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }
  dochange(event:Event){
    let targrt = event.target as HTMLInputElement;
    this.EmitSource.next(targrt.value);
  }

}
