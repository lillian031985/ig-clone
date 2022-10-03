import { FlexLayoutModule } from '@angular/flex-layout';
import { AvatarComponent } from './../../../ui/avatar/avatar.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  template: `
    <div class="container">
      <div fxLayout="row" fxLayoutAlign="start center">
        <div class="avatar-container">
          <app-avatar size="xl"></app-avatar>
        </div>

        <div fxFlexOffset="4em" fxLayout="column" fxLayoutGap="2rem">
          <h1>vivianchen_319</h1>

          <div class="count-container" fxLayout="row" fxLayoutGap="2em">
            <div>
              <span class="count">22</span>
              <span>貼文</span>
            </div>

            <div>
              <span class="count">206</span>
              <span>位粉絲</span>
            </div>

            <div>
              <span class="count">843</span>
              <span>追蹤中</span>
            </div>
          </div>

          <div fxLayout="column">
            <span class="name">伊布</span>
            <p class="motto">Eevee has 9 evolutions</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 0 2em 2em 2em;
      }

      .avatar-container {
        padding: 0 4em;
      }

      h1 {
        font-weight: 300;
        font-size: 2.5rem;
      }

      .count {
        font-weight: 500;
        margin-right: 0.25em;

        &-container {
          font-size: 1.5rem;
        }
      }

      .name {
        font-weight: 600;
        font-size: 1.5rem;
      }

      .motto {
        font-size: 1.5rem;
        margin: 0;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule, AvatarComponent, FlexLayoutModule],
})
export class ProfileHeaderComponent {}
