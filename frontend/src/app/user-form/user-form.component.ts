import { Component, OnChanges, Input, Output, EventEmitter  } from '@angular/core'; 
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnChanges {

  @Input() user: User
  public model: User
  @Output() onSubmit = new EventEmitter<User>();

  constructor() { }

  ngOnChanges(): void {
    this.model = Object.assign({}, this.user);
  }
  
  submit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }

}
