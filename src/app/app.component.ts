import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogPreviewComponent } from "./blog-preview/blog-preview.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogPreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-preview-card';
}
