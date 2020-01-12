import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wow-project-ui';

  constructor(private httpClient: HttpClient) {
  }

  callAPI(): void {
    console.log('chamando api');
    this.httpClient.get<string>('api/qualquer-string')
      .subscribe((value: string) => console.log(value));
  }

}
