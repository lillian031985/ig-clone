import { PostsServie } from './../../data-access/posts.service';
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
  providers: [PostsServie],
})
export class HomeComponent implements OnInit {
  cards$ = this.postsService.getCards();

  constructor(private postsService: PostsServie) {}

  ngOnInit(): void {}
}
