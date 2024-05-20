import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('menu') menu!: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu():void {
    this.menu.toggle();
  }
}