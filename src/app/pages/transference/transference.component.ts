import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoutesService } from 'src/app/providers/routes.service';

@Component({
  selector: 'app-transference',
  templateUrl: 'transference.component.html',
})
export class TransferenceComponent implements OnInit {
  CPF: number;

  account: any;

  agency: any;

  value = '0.00';

  constructor(private api: RoutesService, private route: Router, private toastr: ToastrService) {}

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

  transfer() {
    const dt = localStorage.getItem('data_user@openbank');
    const data_user = JSON.parse(dt);
    this.api
      .Transfer({
        value: this.value,
        user_id: data_user._id,
        cpf: this.CPF,
        agency: this.agency,
        account: this.account,
      })
      .subscribe((resp) => {
        if (resp === 'Saldo insuficiente') {
          this.showNotification('top', 'center', resp);
        } else if (resp === 'Destinatário não encontrado') {
          this.showNotification('top', 'center', resp);
        } else {
          this.route.navigate(['/dashboard']);
        }
      });
  }
}
