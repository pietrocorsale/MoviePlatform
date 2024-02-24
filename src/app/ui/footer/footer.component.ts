import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
//Author   : Piero Corsale
//Purpose  : Controller class of the footer component
//Built on : 10/2022
export class FooterComponent implements OnInit {

  // urls
  logoUrl : string = '../assets/deadful tomatoes.png';

  googlePlayImgUrl : string = '../assets/google_play.png';
  appStoreImgUrl: string = '../assets/app_store.png';

  googlePlayUrl : string = 'https://www.google.com/';
  appStoreUrl: string = 'https://www.google.com/';


  constructor() { }

  ngOnInit(): void {
  }

}
