import { Router } from '@angular/router';
import { AuthService } from './components/templates/login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    mostrarMenu: boolean = false;

    constructor(private authService: AuthService, private router: Router){  }

    ngOnInit(){
        this.authService.mostrarMenuEmitter.subscribe(
            mostrar => this.mostrarMenu = mostrar
        )

        this.router.navigate(['/login'])
    }
}
