import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  backToLogin(){
    this.router.navigate(['/login']);
  }

}
