import {Component, Input} from '@angular/core';

@Component({
  selector: 'total',
  standalone: true,
  imports: [],
  templateUrl: './total.component.html',
  styles: ``
})
export class TotalComponent {
  @Input() total: number | undefined = 0;
}
