import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GanttFlatDataComponent } from "../gantt-flat-data/gantt-flat-data.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GanttFlatDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kendo-interactive-gantt';
}
