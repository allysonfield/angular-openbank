import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticateService } from 'src/app/providers/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  email = '';

  password = '';

  constructor(
    private api: AuthenticateService,
    public route: Router,
    private toastr: ToastrService,
  ) {}

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

  goRegister() {
    this.route.navigate(['/register']);
  }

  login() {
    if (this.email === '' || this.password === '') {
      this.showNotification('top', 'center', 'Preencha todos os dados.');
    } else {
      this.api.login({ email: this.email, password: this.password }).subscribe((resp) => {
        const ob = JSON.stringify(resp);
        const obj = JSON.parse(ob);
        console.log('resposta', obj);
        if (obj.message === 'Logado com sucesso') {
          localStorage.setItem('data_user@openbank', JSON.stringify(obj.user));
          localStorage.setItem('token', obj.token);
          this.route.navigate(['/dashboard']);
        } else {
          alert('Email ou senha incorretos');
        }
      });
    }
  }
}
