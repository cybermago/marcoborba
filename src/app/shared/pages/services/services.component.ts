import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
@Component({
  selector: 'app-services',
  imports: [DividerModule, CardModule, DataViewModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      title: 'Fotografia de Casamentos',
      description: 'Capturamos os momentos mais especiais do seu grande dia.',
      image: 'assets/images/galleria/mb/1.png',
    },
    {
      title: 'Ensaios Fotográficos',
      description: 'Realizamos ensaios fotográficos personalizados para você.',
      image: 'path/to/photoshoot.jpg',
    },
    {
      title: 'Fotografia Comercial',
      description: 'Imagens de alta qualidade para seu negócio ou produto.',
      image: 'path/to/commercial-photo.jpg',
    },
  ];
}
