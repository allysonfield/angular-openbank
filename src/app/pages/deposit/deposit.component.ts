import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesService } from '../../providers/routes.service';

@Component({
  selector: 'app-deposit',
  templateUrl: 'deposit.component.html',
})
export class DepositComponent implements OnInit {
  value = '0.00';

  constructor(private api: RoutesService, public route: Router) {}

  ngOnInit() {}

  deposit() {
    const dt = localStorage.getItem('data_user@openbank');
    const data_user = JSON.parse(dt);
    console.log(data_user);
    this.api
      .Depositer({
        value: this.value,
        user_id: data_user._id,
      })
      .subscribe(() => {
        this.route.navigate(['/dashboard']);
      });
  }
}
