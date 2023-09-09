// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('buttonAnimation', [
      state(
        'normal',
        style({
          transform: 'scale(1)',
        })
      ),
      state(
        'hovered',
        style({
          transform: 'scale(1.1)',
        })
      ),
      transition('normal <=> hovered', animate('200ms ease-in-out')),
    ]),
  ],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  buttonStates: string[] = [];
  constructor(private dataService: DataService,private router: Router) {}
  setButtonState(index: number, state: string) {
    this.buttonStates[index] = state;
  }
  navigateToDetails(userId: number) {
    this.router.navigate(['/user-details', userId]);
  }
  ngOnInit() {
    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
