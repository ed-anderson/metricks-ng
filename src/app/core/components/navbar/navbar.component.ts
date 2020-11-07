import { Component, OnInit } from '@angular/core';
import { RouteStrings } from 'src/app/route-strings';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  RouteStrings = RouteStrings;

  constructor() {}

  ngOnInit(): void {}
}
