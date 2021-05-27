import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from '../models/Statistiques'

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  @Input() statistique!: Statistique;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
