import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });


  ngOnInit(): void {
  }


  registerUser(){
    this.router.navigate(['/cadastrar-usuario']);
  }

  recoverPassword(){
    this.router.navigate(['/recuperar-senha']);
  }

  login(){
    if(this.loginForm.valid){
      localStorage.setItem('token', 'paodeloquedancatanganasiberia');
      this.router.navigate(['/dashboard'])
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Corrija corretamente todos os campos'
      });

      }
    }
  } 

