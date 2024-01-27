import { NgForm } from '@angular/forms';
import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Utilisez styleUrls au lieu de styleUrl
})
export class RegisterComponent implements OnInit {

  public user: User = new User(); // Renommez User en user

  constructor() {}

  ngOnInit(): void {

  }
  public saveData(registerForm: NgForm){
    console.log(registerForm.form);
    console.log('valeur :', JSON.stringify(registerForm.value));
    console.log('saluboss');
  }
  public login() {
    // Implémentez la fonction de connexion ici
    console.log('Fonction de connexion');
  }
}
