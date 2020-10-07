<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{

    public function listar(){
        // sleep(2);
        return Cliente::all();
    }

    public function cadastrar(Request $request){
        $this->validate($request, [
            'nome' => 'required|min:5',
            'empresa' => 'required|min:5'
        ]);

        return Cliente::create($request->all());
    }

    public function editar(Request $request, $id){
        $this->validate($request, [
            'nome' => 'required|min:5',
            'empresa' => 'required|min:5'
        ]);

        $cliente = Cliente::findOrFail($id);
        
        return $cliente->update($request->all());
    }

    public function deletar($id){
        $cliente = Cliente::findOrFail($id);
        return $cliente->delete();
    }

}
