import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { Assignments } from "./assignments/assignments";

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatIconModule, MatDividerModule, MatSidenavModule, MatToolbarModule, MatListModule, Assignments],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  nomDuProf="Nicolas TOUPIN"
  
  title() {
    return 'Bienvenue';
  }
  
  @ViewChild('drawer') drawer!: MatSidenav;

  toggleDrawer() {
    this.drawer?.toggle();
  }
  

  ngOnInit(): void {
    console.log('Juste après le constructeur');
    setTimeout(() => {
      this.nomDuProf = 'Nicolas TOUPIN MODIFIEE';
    }, 3000);
  }
}
