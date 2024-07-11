import { Component } from '@angular/core';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'blog-preview',
  standalone: true,
  imports: [NgFor, DatePipe],
  templateUrl: './blog-preview.component.html',
  styleUrl: './blog-preview.component.css'
})
export class BlogPreviewComponent {

  postTags: string[] = ["Learning"]
  date: Date = new Date("12/21/2023");
  title: string = "HTML & CSS foundations";
  abstract: string = "These languages are the backbone of every website, defining structure, content, and presentation.";
  name: string = "Greg Hooper";

}
