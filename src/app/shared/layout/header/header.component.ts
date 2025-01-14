import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";
import { CarrouselComponent } from "./carrousel/carrousel.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MenuComponent, CarrouselComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 
}
