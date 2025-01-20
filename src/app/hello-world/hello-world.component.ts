import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {

}
