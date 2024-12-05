import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { IUserDetails } from '../../../interfaces';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nr-user-details',
  imports: [AsyncPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);

  public user$!: Observable<IUserDetails>;

  ngOnInit(): void {
    this.user$ = this.route.params.pipe();
  }
}
