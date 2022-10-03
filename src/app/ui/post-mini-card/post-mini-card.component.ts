import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-mini-card',
  templateUrl: './post-mini-card.component.html',
  styleUrls: ['./post-mini-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PostMiniCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
