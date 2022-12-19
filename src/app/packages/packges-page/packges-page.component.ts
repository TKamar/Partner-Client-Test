import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-packges-page',
  templateUrl: './packges-page.component.html',
  styleUrls: ['./packges-page.component.scss']
})
export class PackgesPageComponent implements OnInit {

  public userName: String;

  constructor(private usersService: UsersService) {
    this.userName = this.usersService.getUserName();
  }

  ngOnInit(): void {
  }

}
