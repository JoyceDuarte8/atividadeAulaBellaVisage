import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes: Array<{nome: string, cpf: string, dataNascimento: string}> = [];

  constructor() { }

  ngOnInit() {
    this.clientes.push(
      { nome: "Maria Silva", cpf: "123.456.789-00", dataNascimento: "01/01/1990" },
      { nome: "João Souza", cpf: "987.654.321-00", dataNascimento: "02/02/1990" },
      { nome: "Ana Santos", cpf: "456.789.123-00", dataNascimento: "03/03/1990" },
      { nome: "Pedro Oliveira", cpf: "789.123.456-00", dataNascimento: "04/04/1990" }
    );
  }

}
