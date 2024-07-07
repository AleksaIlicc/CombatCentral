import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterLink, RouterLinkActive, RouterOutlet],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {}
