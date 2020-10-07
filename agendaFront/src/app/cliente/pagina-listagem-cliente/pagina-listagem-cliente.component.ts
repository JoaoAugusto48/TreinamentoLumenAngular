import { ClienteService } from './../shared/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/model/Cliente.model';

@Component({
  selector: 'app-pagina-listagem-cliente',
  templateUrl: './pagina-listagem-cliente.component.html',
  styleUrls: ['./pagina-listagem-cliente.component.css']
})
export class PaginaListagemClienteComponent implements OnInit {

  public clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.carregarClientes();
  }

  public edita(cliente: Cliente){
    console.log(cliente);
    alert('O cliente ' + cliente.nome + ' está em minhas mãos! hahah');
  }

  public carregarClientes(): void{
    this.clienteService.listarClientes()
    .subscribe(
      // caso a requisição de certo..
      (clientesRetorno: Cliente[]) => {
        this.clientes = clientesRetorno;
      },

      // caso a requisição de errado..
      (erro: any) => {
        console.log(erro);
      }
    );
  }

}
