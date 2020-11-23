import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutesService } from 'src/app/providers/routes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-safebox',
  templateUrl: 'safebox.component.html',
})
export class SafeBoxComponent implements OnInit {
  value = '0.00';

  withdrawValue = '0.00';

  amount: number;

  staticAlertClosed = false;

  constructor(
    private api: RoutesService,
    private route: Router,
    private parameter: ActivatedRoute,
    private toastr: ToastrService,
  ) {
    this.amount = parseInt(this.parameter.snapshot.params.amount);
  }

  ngOnInit() {}

  showNotification(from, align, message) {
    this.toastr.error(
      `<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> ${message}`,
      '',
      {
        disableTimeOut: true,
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-info alert-with-icon',
        positionClass: `toast-${from}-${align}`,
      },
    );
  }

  safe() {
    const dt = localStorage.getItem('data_user@openbank');
    const data_user = JSON.parse(dt);
    if (parseInt(this.value) <= 0) {
      this.showNotification('top', 'center', 'O valor não pode ser 0 nem menor que 0.');
    } else {
      this.api
        .SafeAmountDeposit({
          value: this.value,
          user_id: data_user._id,
        })
        .subscribe((resp) => {
          console.log(resp);
          if (resp === 'Saldo insuficiente') {
            this.showNotification('top', 'center', resp);
          } else {
            this.route.navigate(['/dashboard']);
          }
        });
    }
  }

  withdraw() {
    const dt = localStorage.getItem('data_user@openbank');
    const data_user = JSON.parse(dt);
    if (parseInt(this.withdrawValue) <= 0) {
      this.showNotification('top', 'center', 'O valor não pode ser 0 nem menor que 0.');
    } else {
      this.api
        .SafeAmountWithdraw({
          value: this.withdrawValue,
          user_id: data_user._id,
        })
        .subscribe((resp) => {
          if (resp === 'Saldo insuficiente') {
            this.showNotification('top', 'center', resp);
          } else {
            this.route.navigate(['/dashboard']);
          }
        });
    }
  }
}
