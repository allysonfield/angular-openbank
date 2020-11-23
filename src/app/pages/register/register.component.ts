import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoutesService } from 'src/app/providers/routes.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
})
export class RegisterComponent implements OnInit {
  public name = '';

  cpf = '';

  public birthdate = '';

  email = '';

  password = '';

  address = '';

  constructor(private api: RoutesService, private route: Router, private toastr: ToastrService) {}

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

  userInc() {
    if (
      this.name === '' ||
      this.cpf === '' ||
      this.email === '' ||
      this.password === '' ||
      this.address === '' ||
      this.birthdate === ''
    ) {
      this.showNotification('top', 'center', 'Preencha todos os dados.');
    } else {
      const birth = `${this.birthdate.substring(0, 2)}/${this.birthdate.substring(2, 4)}
      /${this.birthdate.substring(4, 8)}`;
      console.log(birth);
      this.api
        .UserInc({
          name: this.name,
          email: this.email,
          password: this.password,
          address: this.address,
          birthdate: birth,
        })
        .subscribe(() => {
          this.route.navigate(['/login']);
        });
    }
  }

  ngOnInit() {}
}
