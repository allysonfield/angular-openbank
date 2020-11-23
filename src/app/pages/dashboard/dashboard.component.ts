import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesService } from 'src/app/providers/routes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  public canvas: any;

  public ctx;

  public datasets = [];

  public months = [];

  public data: any;

  public myChartData;

  public clicked = true;

  public clicked1 = false;

  public clicked2 = false;

  public amount: any;

  public id: any;

  public safeAmount = [];

  public formato = {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  };

  name: any;

  constructor(private api: RoutesService, public route: Router) {
    const dt = localStorage.getItem('data_user@openbank');
    const data_user = JSON.parse(dt);
    this.name = data_user.name;
    this.id = data_user._id;
  }

  goTransference() {
    this.route.navigate(['/transference']);
  }

  goDeposit() {
    this.route.navigate(['/deposit']);
  }

  goSafe() {
    this.route.navigate([`/safebox/${this.safeAmount}`]);
  }

  getSafeAmount() {
    this.api.SafeAmount({ user_id: this.id }).subscribe((resp) => {
      const obj = JSON.stringify(resp);
      const dt = JSON.parse(obj);
      console.log('resp', dt);
      localStorage.setItem('safeAmount', dt.value);
      this.safeAmount = dt.value;
    });
  }

  callDeposit() {
    this.api.DepositList({ user_id: this.id }).subscribe((resp) => {
      const obj = JSON.stringify(resp);
      const dt = JSON.parse(obj);

      this.datasets = dt;
      console.log('months', this.datasets);
      this.getSafeAmount();
    });
  }

  callAmount() {
    const dt = localStorage.getItem('data_user@openbank');
    const data_user = JSON.parse(dt);
    this.api.Amount({ user_id: data_user._id }).subscribe((resp) => {
      const obj = JSON.stringify(resp);
      const dtt = JSON.parse(obj);
      console.log('resposta', dt);
      this.amount = dtt.value;
      this.callDeposit();
    });
  }

  ngOnInit(): void {
    this.callAmount();
  }
}
