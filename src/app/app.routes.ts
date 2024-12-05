import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PhotoComponent } from './components/photo/photo.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { PhotoDetailsComponent } from './components/photo/photo-details/photo-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserDetailsComponent, outlet: 'details' },
  { path: 'photo', component: PhotoComponent },
  { path: 'photo/:id', component: PhotoDetailsComponent },
  { path: '**', component: NotFoundComponent },
];
