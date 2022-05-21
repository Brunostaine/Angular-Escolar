import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {

  @Input('link') link: string = '';
  @Input('nome') title: string = '';
  @Input('img') img: string = ''
  

  constructor() { }

  ngOnInit(): void {
  }

}
