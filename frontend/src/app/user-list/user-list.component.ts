import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public filteredUsers: User[];
  public selectedRole: string;
  public selectedUser: User;

  private users: User[] = [];

  constructor(
    private userService: UserService
  ) { 
  }

  async ngOnInit(): Promise<void> {
    this.selectedRole = '';
    this.users = await this.userService.getUsers();
    this.filter();
  }

  onFilterChange(role: string): void {
    this.selectedRole = role;
    this.filter();
  }

  onSelectUser(user: User): void {
    this.selectedUser = user;
  }

  async onFormSubmit(user: User): Promise<void> {
    if (user.id > 0) {
      await this.userService.updateUser(user)
      this.selectedUser.userName = user.userName;
      this.selectedUser.emailAddress = user.emailAddress;
      this.selectedUser.password = user.password;
      this.selectedUser.role = user.role;
      this.selectedUser.pizzak = user.pizzak;
      
    } else {
      this.selectedUser.id = Math.floor(Math.random()*1000000);
      this.selectedUser.userName = user.userName;
      this.selectedUser.emailAddress = user.emailAddress;
      this.selectedUser.password = user.password;
      this.selectedUser.pizzak = user.pizzak;
      this.selectedUser.role = 'ROLE_ADMIN';
      this.userService.createUser(user)
                        .then(createdUser => {
                          this.users.push(createdUser);
                        });
    }
    this.selectedUser = null;
  }
  
  onNewClick(): void {
    this.selectedUser = new User();
  }
  
  onDeleteClick(id: number) {
    this.userService.deleteUser(id)
    .then(async () => {
      this.selectedUser = null;
      this.users = await this.userService.getUsers();
      this.filter();
    })
  }

  private filter(): void {
    this.filteredUsers = this.selectedRole === ''
    ? this.users
    : this.users.filter(user => user.role === this.selectedRole);
  }
}
