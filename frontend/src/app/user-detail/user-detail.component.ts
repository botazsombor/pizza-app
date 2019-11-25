import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  public user: User = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }
  
  async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.user = await this.userService.getUser(id);
  }
}
