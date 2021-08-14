import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

   public users:User[] = [] as User[];
  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

  public getDataInTable():void{
       this.userService.getUsers()
         .subscribe(data => this.users = data);
       
  }

}
