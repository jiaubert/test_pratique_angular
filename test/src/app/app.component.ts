import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  test1 = new Statistique{
    id: Statistique.id = "a1f5f40-be3b-11eb-91ec-7f5875ecfb46",
    titre = "Démographie en France",
    valeur = "60M",
    appreciation = "SUCCESS"
  }
  
  
  test2 = new Statistique{
    id = "a1f5f40-be3b-11eb-91ec-7f5875ecfb48",
    titre = "Parité homme/femme dans la formation DWWM St-Etienne",
    valeur = "13/2",
    appreciation = "DANGER"
  }
}


