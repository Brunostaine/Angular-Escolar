import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.css']
})
export class ButtomComponent implements OnInit {

  @Input('nome') buttomAdicionar: string = ''
  @Input('background') background: string =  ''

  constructor() { }

  ngOnInit(): void {
  }

}
