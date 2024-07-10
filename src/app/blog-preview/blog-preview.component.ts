import { Component } from '@angular/core';
import { PostImageComponent } from "../post-image/post-image.component";
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'blog-preview',
  standalone: true,
  imports: [PostImageComponent, TagsComponent],
  templateUrl: './blog-preview.component.html',
  styleUrl: './blog-preview.component.css'
})
export class BlogPreviewComponent {

}
