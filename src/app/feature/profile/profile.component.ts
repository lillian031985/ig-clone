import { FlexLayoutModule } from '@angular/flex-layout';
import { PostMiniCardComponent } from './../../ui/post-mini-card/post-mini-card.component';
import { ProfileHeaderComponent } from './containers/profile-header.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ProfileHeaderComponent,
    PostMiniCardComponent,
    FlexLayoutModule,
  ],
})
export class ProfileComponent {}
