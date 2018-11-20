import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  routes = [];
  constructor() { }

  ngOnInit() {
    this.routes = [
      { linkName: 'Profile', url: 'profile' },
      { linkName: 'Contact Info', url: 'contact' }
    ];
  }

}
