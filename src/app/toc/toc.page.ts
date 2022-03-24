import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: 'Bullseye | Benjamin Pondexter',
      url: '/bullseye'
    },
    {
      title: 'Daredevil | Matthew Murdock',
      url: '/daredevil'
    },
    {
      title: 'Elektra | Elektra Natchios',
      url: '/elektra'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
