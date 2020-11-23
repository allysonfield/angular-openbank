import { Component, OnInit } from '@angular/core';
import { RoutesService } from 'src/app/providers/routes.service';

@Component({
  selector: 'app-tables',
  templateUrl: 'tables.component.html',
})
export class TablesComponent implements OnInit {
  id: any;

  public datasets: [];

  public amount: any;

  constructor(private api: RoutesService) {
    const dt = localStorage.getItem('data_user@openbank');
    const data_user = JSON.parse(dt);
    this.id = data_user._id;
  }

  callDeposit() {
    this.api.DepositList({ user_id: this.id }).subscribe((resp) => {
      const obj = JSON.stringify(resp);
      const dt = JSON.parse(obj);

      this.datasets = dt;
      console.log('months', this.datasets);
    });
  }

  callAmount() {
    const dt = localStorage.getItem('data_user@openbank');
    const data_user = JSON.parse(dt);
    this.api.Amount({ user_id: data_user._id }).subscribe((resp) => {
      const obj = JSON.stringify(resp);
      const dtt = JSON.parse(obj);
      console.log('resposta table', dt);
      this.amount = dtt.value;
      this.callDeposit();
    });
  }

  ngOnInit() {
    this.callAmount();
  }
}
