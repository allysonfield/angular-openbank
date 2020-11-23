import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from 'src/services/token.service';
import { HttpModule } from '@angular/http';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    HttpClientModule,
    HttpModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
