import { Component, OnInit } from '@angular/core';
import { Type } from "../type";

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  type:Type={
    id:1,
    name:"book"
  };

  constructor() { }

  ngOnInit() {
  }

}
