import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
selectedTab: string ='home';

  homeClicked(){
    this.selectedTab= 'home';
  }

  adminClicked(){
    this.selectedTab= 'admin';
  }

  onSubscribe(){



    alert('thank you for subscribing . you have active subscrption now.');
  }
}
