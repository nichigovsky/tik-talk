import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient)

  baseApiUrl = 'https://icherniakov.ru/yt-course/'

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`)
  }

  // api is dead
  getMe(): Profile {
    return {
      id: 0,
      username: 'ivan',
      avatarUrl: null,
      subscriptionsAmount: 14,
      firstName: 'Ivan',
      lastName: 'Nichigovsky',
      isActive: true,
      description: 'Very ochen affordable',
      city: 'NovocherkA$$k',
      stack: ['react', 'angularsk', 'typescriptsk', 'agressive masturbation']
    };
  }

  getSubscribersShortList() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/subscribers`)
  }
}
