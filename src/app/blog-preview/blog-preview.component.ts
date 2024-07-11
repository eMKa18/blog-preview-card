import { Component } from '@angular/core';
import { PostImageComponent } from "../post-image/post-image.component";
import { TagsComponent } from '../tags/tags.component';
import { PublishedDateComponent } from '../published-date/published-date.component';

@Component({
  selector: 'blog-preview',
  standalone: true,
  imports: [PostImageComponent, TagsComponent, PublishedDateComponent],
  templateUrl: './blog-preview.component.html',
  styleUrl: './blog-preview.component.css'
})
export class BlogPreviewComponent {

}
