import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  users: any[] = [];
  posts: any[] = [];
  constructor(private dataService: DataService) {}

 

 

  ngOnInit() {
    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
    });

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}