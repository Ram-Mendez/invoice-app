import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgFor} from "@angular/common";

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css'
})
export class FormItemComponent implements OnInit {
  @Output() addItemEventEmitter = new EventEmitter();
  private counterId = 4;

  item: any = {
    product: '',
    price: '',
    quantity: ''
  };


  ngOnInit() {
  }


  onSubmit(itemForm: NgForm) {
    if (itemForm.valid) {
      this.addItemEventEmitter.emit({id: this.counterId, ...this.item});
      this.counterId++;

      this.item = {
        product: '',
        price: '',
        quantity: ''
      };
      itemForm.reset();
      itemForm.resetForm();
    }
  }
}
