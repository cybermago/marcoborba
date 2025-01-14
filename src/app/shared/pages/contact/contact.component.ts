import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputText, InputTextClasses, InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
@Component({
  selector: 'app-contact',
  imports: [CardModule, DividerModule, ButtonModule, InputText, InputTextModule, InputMaskModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
