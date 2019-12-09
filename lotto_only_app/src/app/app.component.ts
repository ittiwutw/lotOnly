import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  pages = [
    {
      title: 'ตรวจบ้าน - คอนโด',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'ตกแต่งภายใน',
      url: '/tabs/contact',
      icon: 'person'
    },
    {
      title: 'จัดสวน',
      url: '/tabs/about',
      icon: 'information-circle'
    },
    {
      title: 'รับเหมาต่อเติม',
      url: '/tabs/about',
      icon: 'information-circle'
    },
    {
      title: 'นานาสาระ',
      url: '/app/tabs/news',
      icon: 'information-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
