import { PaginaListagemClienteComponent } from './cliente/pagina-listagem-cliente/pagina-listagem-cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaCadastroClienteComponent } from './cliente/pagina-cadastro-cliente/pagina-cadastro-cliente.component';

const routes: Routes = [
  {path: 'clientes', component: PaginaListagemClienteComponent},
  {path: 'clientes/novo', component: PaginaCadastroClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
