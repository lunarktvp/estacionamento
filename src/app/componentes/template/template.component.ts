import { AutenticaUsersService } from './../../serviços/guardaRotas/autentica-users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  fullAccess: boolean = false

  constructor(
    private auteticausers: AutenticaUsersService
    ) { }

  ngOnInit(): void {

    this.fullAccess = this.auteticausers.usuarioFullAcess()

    console.log(this.fullAccess)
  }

}
