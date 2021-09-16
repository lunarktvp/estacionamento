import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-dia',
  templateUrl: './entrada-dia.component.html',
  styleUrls: ['./entrada-dia.component.css']
})
export class EntradaDiaComponent implements OnInit {



  constructor(
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    this.router.navigate(['/home'])
  }

}
