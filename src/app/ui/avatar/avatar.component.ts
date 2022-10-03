import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AvatarComponent {
  @Input() size: 'xl' | 'large' | 'small' = 'small';
}
