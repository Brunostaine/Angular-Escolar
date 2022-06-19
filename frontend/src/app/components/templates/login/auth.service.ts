import { Router } from '@angular/router';
import { Usuario } from './../../../models/usuarios-model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private usuarioAutenticado: boolean = false;

    mostrarMenuEmitter = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.email === 'admin@email.com' &&
    usuario.senha === 'admin') {
        this.usuarioAutenticado = true

        this.mostrarMenuEmitter.emit(true)

        this.router.navigate(['/'])
    } else {
        this.usuarioAutenticado = false

        this.mostrarMenuEmitter.emit(false)
    }
  }
}
