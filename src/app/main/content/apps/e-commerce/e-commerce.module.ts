import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import { MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatTableModule, MatTabsModule } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaWidgetModule } from '@elisa/components/widget/widget.module';

import { ElisaEcommerceDashboardComponent } from './dashboard/dashboard.component';
import { EcommerceDashboardService } from './dashboard/dashboard.service';
import { ElisaEcommerceProductsComponent } from './products/products.component';
import { EcommerceProductsService } from './products/products.service';
import { ElisaEcommerceProductComponent } from './product/product.component';
import { EcommerceProductService } from './product/product.service';
import { ElisaEcommerceOrdersComponent } from './orders/orders.component';
import { EcommerceOrdersService } from './orders/orders.service';
import { ElisaEcommerceOrderComponent } from './order/order.component';
import { EcommerceOrderService } from './order/order.service';

const routes: Routes = [
    {
        path     : 'dashboard',
        component: ElisaEcommerceDashboardComponent,
        resolve  : {
            data: EcommerceDashboardService
        }
    },
    {
        path     : 'products',
        component: ElisaEcommerceProductsComponent,
        resolve  : {
            data: EcommerceProductsService
        }
    },
    {
        path     : 'products/:id',
        component: ElisaEcommerceProductComponent,
        resolve  : {
            data: EcommerceProductService
        }
    },
    {
        path     : 'products/:id/:handle',
        component: ElisaEcommerceProductComponent,
        resolve  : {
            data: EcommerceProductService
        }
    },
    {
        path     : 'orders',
        component: ElisaEcommerceOrdersComponent,
        resolve  : {
            data: EcommerceOrdersService
        }
    },
    {
        path     : 'orders/:id',
        component: ElisaEcommerceOrderComponent,
        resolve  : {
            data: EcommerceOrderService
        }
    }
];

@NgModule({
    declarations: [
        ElisaEcommerceDashboardComponent,
        ElisaEcommerceProductsComponent,
        ElisaEcommerceProductComponent,
        ElisaEcommerceOrdersComponent,
        ElisaEcommerceOrderComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        CdkTableModule,
        MatButtonModule,
        MatChipsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,

        NgxChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),

        ElisaSharedModule,
        ElisaWidgetModule,
    ],
    providers   : [
        EcommerceDashboardService,
        EcommerceProductsService,
        EcommerceProductService,
        EcommerceOrdersService,
        EcommerceOrderService
    ]
})
export class ElisaEcommerceModule
{
}
