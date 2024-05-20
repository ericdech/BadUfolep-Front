import { Component, OnInit } from '@angular/core';
import { Championnat } from '../championnat';
import { ChampionnatService } from '../championnat.service';

@Component({
  selector: 'app-championnats',
  templateUrl: './championnats.component.html',
  styleUrls: ['./championnats.component.css']
})
export class ChampionnatsComponent implements OnInit {
  championnats! : Championnat[];

  constructor(private championnatService: ChampionnatService) {
  }

  ngOnInit(): void {
    this.getChampionnats();
  }

  getChampionnats(): void {
    this.championnats = this.championnatService.getChampionnats();
  }
}
