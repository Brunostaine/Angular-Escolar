import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-pages',
  templateUrl: './header-pages.component.html',
  styleUrls: ['./header-pages.component.css']
})
export class HeaderPagesComponent implements OnInit {

  @Input('name') nome = ''

  constructor() { }

  ngOnInit(): void {
  }

}
