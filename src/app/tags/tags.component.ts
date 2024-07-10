import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tags',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  postTags: string[] = ["Learning", "Adventures"]

}
