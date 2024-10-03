import { Routes } from '@angular/router';
import { LoginComponent } from './component/vendor/auth/login/login.component';
import { VendorProductListComponent } from './component/vendor/dashboard/vendor-dashboard/vendor-product-list/vendor-product-list.component';
import { AddProductComponent } from './component/vendor/add-product/add-product.component';
import { LogoutComponent } from './component/vendor/auth/logout/logout.component';
import { OrderedProductComponent } from './component/vendor/order/ordered-product/ordered-product.component';
import { UnorderedProductComponent } from './component/vendor/order/unordered-product/unordered-product.component';
import { OrderProductDetailComponent } from './component/vendor/order/order-product-detail/order-product-detail.component';


export const routes: Routes = [
    {
        "path" : "" , component: LoginComponent
    },
    {
        "path": "vendor/dashboard" , component:VendorProductListComponent
    },
    {
        "path": "logout" , component: LogoutComponent
    },
    {
        "path": "vendor/product-list" , component: VendorProductListComponent
    },
    {
        "path": "vendor/add-product" , component: AddProductComponent
    },
    
    {
        "path": "vendor/ordered-product" , component:OrderedProductComponent
    },
    
    {
        "path": "vendor/unordered-product" , component:UnorderedProductComponent
    }
    ,
    
    {
        "path": "vendor/ordered-product-detail" , component:OrderProductDetailComponent
    }
];
