import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatDivider, MatIcon],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignement-app');
}
