import { Component } from '@angular/core';
import { PostImageComponent } from "../post-image/post-image.component";

@Component({
  selector: 'blog-preview',
  standalone: true,
  imports: [PostImageComponent],
  templateUrl: './blog-preview.component.html',
  styleUrl: './blog-preview.component.css'
})
export class BlogPreviewComponent {

}
