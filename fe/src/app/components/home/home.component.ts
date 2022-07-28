import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listVpsInfo : any[] = [
    {
      id:1,
      core: 1,
      ram:1
    },
    {
      id:2,
      core: 1,
      ram:2
    },
    {
      id:3,
      core: 2,
      ram: 2
    },
    {
      id:4,
      core: 2,
      ram: 4
    }
  ];
  responsiveOptions;


  
  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
  }

}
