import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:any ={
    matricula:"",
    senha:""
  }

  logando: boolean = false;

  constructor(
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    this.logando = false
    if(this.usuario.matricula == 'administrador' && this.usuario.senha == '142508'){
      this.router.navigate(['/home'])
    }else{
      this.router.navigate([''])
      this.logando = true
    }
  }
}
