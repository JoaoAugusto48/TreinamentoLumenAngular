import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpCliente: HttpClient) { }

  public listarClientes(): Observable<Cliente[]>{
    return this.httpCliente.get<Cliente[]>('http://localhost:8000/clientes'); 
  }

  public cadastrarCliente(cliente: Cliente): Observable<any>{
    return this.httpCliente.post('http://localhost:8000/clientes', cliente);
  }

}
