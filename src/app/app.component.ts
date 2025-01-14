import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule, Drawer } from 'primeng/drawer';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { HeaderComponent } from "./shared/layout/header/header.component";
import { FooterComponent } from "./shared/layout/footer/footer.component";
import { AboutComponent } from "./shared/pages/about/about.component";
import { ContactComponent } from "./shared/pages/contact/contact.component";
import { ServicesComponent } from "./shared/pages/services/services.component";
import { PricesComponent } from "./shared/pages/prices/prices.component";
import { CallActionComponent } from "./shared/pages/call-action/call-action.component";
import { TestimonialsComponent } from "./shared/pages/testimonials/testimonials.component";
import { GalleryComponent } from "./shared/pages/gallery/gallery.component";
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from "./shared/layout/header/carrousel/carrousel.component";
import { MenuComponent } from "./shared/layout/header/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FooterComponent, AboutComponent, ContactComponent, ServicesComponent, PricesComponent, CallActionComponent, TestimonialsComponent, GalleryComponent, CarrouselComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'marcoborba';

}
