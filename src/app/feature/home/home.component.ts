import { FlexLayoutModule } from '@angular/flex-layout';
import { PostCardComponent } from './../../ui/post-card/post-card.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, PostCardComponent, FlexLayoutModule],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
