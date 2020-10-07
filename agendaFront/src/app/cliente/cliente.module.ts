import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaListagemClienteComponent } from './pagina-listagem-cliente/pagina-listagem-cliente.component';
import { PaginaCadastroClienteComponent } from './pagina-cadastro-cliente/pagina-cadastro-cliente.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PaginaListagemClienteComponent, PaginaCadastroClienteComponent],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule
  ],
  exports: [PaginaListagemClienteComponent, PaginaCadastroClienteComponent]
})
export class ClienteModule { }
