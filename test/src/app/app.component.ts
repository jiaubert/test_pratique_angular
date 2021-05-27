import { Component , OnInit} from '@angular/core';
import { Statistique } from './models/Statistiques';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
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
    "WARNING"
  );

  public stat3 = new Statistique(
    "fa1f5f40-be3b-11eb-91ec-7f5875ecfb57",
    "Test2",
    "1M",
    "ERROR"
  );

  public tabStat = [this.stat1,this.stat2];

  ngOnInit(){
    setTimeout(() => {
      this.tabStat.push(this.stat3)
    }, 3000);
  }
  
}