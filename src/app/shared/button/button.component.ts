import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[appButton],a[appButton]', // selector: 'button[appButton].a[button] for achor tag also we can use this',   
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() type = 'button';
}
