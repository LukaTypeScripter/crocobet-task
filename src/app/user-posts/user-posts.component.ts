import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent {
  posts: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit() {
    const userIdParam = this.route.snapshot.paramMap.get('id');
  
    if (userIdParam !== null) {
      const userId = +userIdParam;
      if (!isNaN(userId)) {
        this.dataService.getUserPosts(userId).subscribe((posts) => {
          this.posts = posts;
        });
      } else {
        console.error('Invalid user ID.');
      }
    } else {
      console.error('User ID is null.');
    }
  }

}
