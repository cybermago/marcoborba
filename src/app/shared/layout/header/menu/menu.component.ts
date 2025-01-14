import { Component, ViewChild } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Button } from 'primeng/button';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { Drawer } from 'primeng/drawer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [SidebarModule, Button, AvatarModule, MenubarModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
      this.sidebarRef.close(e);
  }
  toggleSidebar(): void {
    this.visible = !this.visible;
  }

  visible: boolean = false;
}
