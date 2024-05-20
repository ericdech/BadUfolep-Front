import { Component, OnInit, Input } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() title!: string;
  @Input() menu!: MenuComponent;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.menu.toggleMenu();
  }
}
