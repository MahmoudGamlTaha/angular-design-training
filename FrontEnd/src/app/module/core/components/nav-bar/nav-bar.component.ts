import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }
   changeLangage(lang: string) {
   this.translateService.setDefaultLang(lang);
   this.translateService.use(lang);
}

}



