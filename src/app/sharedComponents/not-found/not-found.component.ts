import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.querySelector('html').style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 32%, rgba(0,0,0,1) 33%, rgba(29,29,29,1) 100%)'; // MUDAR O BACKGROUND VIA JS
  }

  ngOnDestroy() {
    document.querySelector('html').style.background = 'none'; // QUANDO MUDAR O BACKGROUND PELO JS, TEM QUE TER O DESTROY
  }

}
