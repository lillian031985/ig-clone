import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AvatarComponent } from './../avatar/avatar.component';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    AvatarComponent,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class PostCardComponent implements OnInit {
  @Input() liked = false;

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      comment: ['', Validators.required],
    });
  }
}
