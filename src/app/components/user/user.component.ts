import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'nr-user',
  imports: [RouterModule, AsyncPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  public users$ = new Observable<IUser[]>();
  private readonly http = inject(HttpClient);

  ngOnInit(): void {
    this.users$ = this.http.get<IUser[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }
}
