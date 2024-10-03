import { Routes } from '@angular/router';
import { LoginComponent } from './component/vendor/auth/login/login.component';
import { VendorProductListComponent } from './component/vendor/dashboard/vendor-dashboard/vendor-product-list/vendor-product-list.component';
import { AddProductComponent } from './component/vendor/add-product/add-product.component';
import { LogoutComponent } from './component/vendor/auth/logout/logout.component';

import { OrderProductDetailComponent } from './component/vendor/order/order-product-detail/order-product-detail.component';
import { VendorDashboardComponent } from './component/vendor/dashboard/vendor-dashboard/vendor-dashboard.component';
import { ReturnOrderComponent } from './component/vendor/order/return-order/return-order.component';
import { ExchangeOrderComponent } from './component/vendor/order/exchange-order/exchange-order.component';


export const routes: Routes = [
    {
        "path" : "" , component: LoginComponent
    },
    {
        "path": "vendor/dashboard" , component:VendorDashboardComponent
    },
    {
        "path": "logout" , component: LogoutComponent
    },
    {
        "path": "vendor/product-list" , component :VendorProductListComponent
    },
    {
        "path": "vendor/add-product" , component: AddProductComponent
    },
    
   
    
    {
        "path": "vendor/ordered-product-detail" , component:OrderProductDetailComponent
    },
    {
        "path": "vendor/return-order" , component:ReturnOrderComponent
    }
    ,
    {
        "path": "vendor/exchange-order" , component:ExchangeOrderComponent
    }
];
