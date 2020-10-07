import { ClienteService } from './../shared/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/model/Cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-cadastro-cliente',
  templateUrl: './pagina-cadastro-cliente.component.html',
  styleUrls: ['./pagina-cadastro-cliente.component.css']
})
export class PaginaCadastroClienteComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public processando: boolean = true;

  constructor(private ClienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  public voltarParaTelaListagem(): void{
    this.router.navigate(['/clientes']);
  }

  public cadastar(): void{
    this.ClienteService.cadastrarCliente(this.cliente)
    .subscribe(
      
      // se der certo
      () => {
        this.processando = false;
        this.cliente = new Cliente();
      },

      // se não der certo
      () => {
        alert('Não foi!');
        this.processando = false;
      }
    );

    console.log(this.cliente);
  }

}
