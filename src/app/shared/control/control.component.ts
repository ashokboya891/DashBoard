import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{  //prefered has to work with onclick inside component
    class: 'control',
    '(click)':'onClick()'
  }

})
export class ControlComponent {
  // @HostBinding('class') className='control';  //outdated
  // @HostListener('click') onClick()   //new one but not prefered
  // {
  //   console.log('Clicked!!');
  // }
  label=input.required<string>();

  onClick()      
  {
    console.log('Clicked!!');
  }
}

