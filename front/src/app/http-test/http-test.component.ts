import { Component, OnInit } from '@angular/core';
import { HttpTestService } from './http-test.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
  providers: []
})
export class HttpTestComponent implements OnInit {
  getData: string = "hello";

  constructor(private httpService: HttpTestService) { }

  ngOnInit() {
  }

  onTestGet() {
    this.httpService.getText()
      .subscribe(
        data => this.getData = data.result,
        error => alert(error),
        () => console.log("Finish")
      );
  }
}
