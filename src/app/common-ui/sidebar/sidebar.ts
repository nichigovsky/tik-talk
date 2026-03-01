import { Component, inject, signal } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SubscriberCard } from './subscriber-card/subscriber-card';
import { SvgIcon } from '../svg-icon/svg-icon';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-sidebar',
  imports: [NgForOf, RouterLink, SubscriberCard, SvgIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone: true,
})
export class Sidebar {
  profileService = inject(ProfileService);

  me = signal(this.profileService.getMe())

  menuItems = [
    {
      label: 'My home page',
      icon: 'home',
      link: '',
    },
    {
      label: 'Chats',
      icon: 'chat',
      link: 'chats',
    },
    {
      label: 'Search',
      icon: 'search',
      link: 'search',
    },
  ];
}
