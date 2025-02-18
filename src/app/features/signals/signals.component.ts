import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  readonly counter: WritableSignal<number> = signal(0);

  updateCounter() {
    this.counter.update(value => value +1);
  }

  constructor() {
    effect(() => {
      console.log(`Count is ${this.counter()}`);
    });
  }

}