import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  listImg=[
    {url:"",titel:""},
    {url:"",titel:""},
    {url:"",titel:""},
    {url:"",titel:""},
    {url:"",titel:""},
    {url:"",titel:""},
    {url:"",titel:""},
    {url:"",titel:""},
    {url:"",titel:""}
]
  constructor() { }

  ngOnInit(): void {
  }

}
