

import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const userIdParam = this.route.snapshot.paramMap.get('id');

    if (userIdParam !== null) {
      const userId = +userIdParam;
      if (!isNaN(userId)) {
        this.dataService.getUsers().subscribe((users) => {
          const user = users.find((u) => u.id === userId);
          if (user) {
            this.user = user;
          } else {
            console.error('User not found.');
          }
        });
      } else {
        console.error('Invalid user ID.');
      }
    } else {
      console.error('User ID is null.');
    }
  }

  navigateToPosts() {
    if (this.user && this.user.id) {
      this.router.navigate(['/user-posts', this.user.id]);
    }
  }
}
