import { Component } from '@angular/core';
import { Statistique } from './models/Statistiques';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  public stat1 = new Statistique(
    "fa1f5f40-be3b-11eb-91ec-7f5875ecfb46",
    "Démographie en France",
    "60M",
    "SUCCESS"
  );

  public stat2 = new Statistique(
    "fa1f5f40-be3b-11eb-91ec-7f5875ecfb47",
    "Test",
    "6M",
    "ERROR"
  );

}