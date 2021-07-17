import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit, OnDestroy {

  constructor( private router: Router) { }

  ngOnInit(): void {
    document.querySelector('html').style.background = 'linear-gradient(to right, #fbc7d4, #9796f0)'; // MUDAR O BACKGROUND VIA JS
  }

  ngOnDestroy() {
    document.querySelector('html').style.background = 'none'; // QUANDO MUDAR O BACKGROUND PELO JS, TEM QUE TER O DESTROY
  }

  backToLogin(){
    this.router.navigate(['/login']);
  }

}
