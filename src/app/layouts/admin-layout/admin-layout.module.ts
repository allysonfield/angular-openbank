import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from 'src/services/token.service';
import { DepositComponent } from 'src/app/pages/deposit/deposit.component';
import { SafeBoxComponent } from 'src/app/pages/safeBox/safebox.component';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { TablesComponent } from '../../pages/tables/tables.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { TransferenceComponent } from '../../pages/transference/transference.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  declarations: [
    DashboardComponent,
    TablesComponent,
    IconsComponent,
    TransferenceComponent,
    DepositComponent,
    SafeBoxComponent,

    // RtlComponent
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true }],
})
export class AdminLayoutModule {}
