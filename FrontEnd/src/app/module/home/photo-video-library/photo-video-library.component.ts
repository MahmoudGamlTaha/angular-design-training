import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-video-library',
  templateUrl: './photo-video-library.component.html',
  styleUrls: ['./photo-video-library.component.scss']
})
export class PhotoVideoLibraryComponent implements OnInit {

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
