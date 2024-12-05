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
import { IPhoto } from '../../interfaces';

@Component({
  selector: 'nr-photo',
  imports: [AsyncPipe, RouterModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoComponent implements OnInit {
  private readonly http = inject(HttpClient);
  public photos$ = new Observable<IPhoto[]>();

  ngOnInit(): void {
    this.photos$ = this.http.get<IPhoto[]>(
      `https://jsonplaceholder.typicode.com/photos?_limit=5`
    );
  }
}
