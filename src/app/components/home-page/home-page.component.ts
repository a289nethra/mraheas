import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    document.getElementById('html')?.setAttribute("style", "overflow:hidden!important;");
  }

}
