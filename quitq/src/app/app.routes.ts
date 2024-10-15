import { Routes } from '@angular/router';
import { LoginComponent } from './component/vendor/auth/login/login.component';
import { VendorProductListComponent } from './component/vendor/dashboard/vendor-dashboard/vendor-product-list/vendor-product-list.component';
import { AddProductComponent } from './component/vendor/add-product/add-product.component';
import { LogoutComponent } from './component/vendor/auth/logout/logout.component';

import { OrderProductDetailComponent } from './component/vendor/order/order-product-detail/order-product-detail.component';
import { VendorDashboardComponent } from './component/vendor/dashboard/vendor-dashboard/vendor-dashboard.component';
import { ReturnOrderComponent } from './component/vendor/order/return-order/return-order.component';
import { ExchangeOrderComponent } from './component/vendor/order/exchange-order/exchange-order.component';
import { VendorSignupComponent } from './component/vendor/auth/vendor-signup/vendor-signup.component';
import { ProfileViewComponent } from './component/vendor/profile/profile-view/profile-view.component';
import { ProfileUpdateComponent } from './component/vendor/profile/profile-update/profile-update.component';
import { AddImageComponent } from './component/vendor/image/add-image/add-image.component';
import { ShowImageComponent } from './component/vendor/image/show-image/show-image.component';
import { ViewImageComponent } from './component/vendor/image/view-image/view-image.component';
import { ViewComponent } from './component/vendor/product/view/view.component';
import { UpdateProductComponent } from './component/vendor/product/update-product/update-product.component';
import { ReviewProductComponent } from './component/vendor/product/review-product/review-product.component';
import { OrderDetailComponent } from './component/vendor/order/order-detail/order-detail.component';
import { OrdersComponent } from './component/vendor/order/orders/orders.component';
import { ViewOrderDetailsComponent } from './component/vendor/order/view-order-details/view-order-details.component';
import { ReturnOrderDetailComponent } from './component/vendor/order/return-order-detail/return-order-detail.component';
import { ExchangeOrderDetailComponent } from './component/vendor/order/exchange-order-detail/exchange-order-detail.component';
import { WarehouseDetailComponent } from './component/vendor/warehouse/warehouse-detail/warehouse-detail.component';
import { AddAddressComponent } from './component/vendor/address/add-address/add-address.component';
import { ViewAddressComponent } from './component/vendor/address/view-address/view-address.component';
import { CategoryStatsComponent } from './component/vendor/stats/category-stats/category-stats.component';
import { OrderStatsComponent } from './component/vendor/stats/order-stats/order-stats.component';
import { ProductStatsComponent } from './component/vendor/stats/product-stats/product-stats.component';
import { ForgotPasswordComponent } from './component/vendor/password/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/vendor/password/reset-password/reset-password.component';
import { AuthGuard } from './component/vendor/guard/guard.guard';
import { EnterEmailComponent } from './component/vendor/password/enter-email/enter-email.component';


export const routes: Routes = [
    {
        "path" : "" , component: LoginComponent
    },
    {
        "path": "vendor/dashboard" , component:VendorDashboardComponent,canActivate: [AuthGuard]
    },
    {
        "path": "logout" , component: LogoutComponent
    },
    {
        "path": "vendor/product-list" , component :VendorProductListComponent,canActivate: [AuthGuard]
    },
    {
        "path": "vendor/add-product" , component: AddProductComponent,canActivate: [AuthGuard]
    },
    
   
    
    {
        "path": "vendor/ordered-product-detail" , component:OrderProductDetailComponent,canActivate: [AuthGuard]
    },
    {
        "path": "vendor/return-order" , component:ReturnOrderComponent,canActivate: [AuthGuard]
    }
    ,
    {
        "path": "vendor/exchange-order" , component:ExchangeOrderComponent,canActivate: [AuthGuard]
    },
    {
        "path":"vendor/sign-up",component:VendorSignupComponent
    }
    ,
    {
        "path":"vendor/profile",component:ProfileViewComponent,canActivate: [AuthGuard]
    },
    {
        "path":"vendor/profile-update",component:ProfileUpdateComponent,canActivate: [AuthGuard]
    },
    ,
    {
        "path":"vendor/image-add/:product",component:AddImageComponent,canActivate: [AuthGuard]
    }
     ,
    {
        "path":"vendor/image-show",component:ViewImageComponent,canActivate: [AuthGuard]
    }
    ,
    {
        "path":"vendor/product-view/:id",component:ViewComponent,canActivate: [AuthGuard]
    }
    ,
    {
        "path":"vendor/product-update/:id",component:UpdateProductComponent,canActivate: [AuthGuard]
    }
    ,
    {
        "path":"vendor/product-review/:id",component:ReviewProductComponent,canActivate: [AuthGuard]
    }
    ,
    {
        "path":"vendor/product-order",component:OrdersComponent,canActivate: [AuthGuard]
    }
    ,
    {
        "path":"vendor/order-view/:id",component:ViewOrderDetailsComponent,canActivate: [AuthGuard]
    }
    ,
    {
        "path":"vendor/return-order-detail/:id",component:ReturnOrderDetailComponent,canActivate: [AuthGuard]
    }
    ,
    {
        "path":"vendor/exchange-order-detail/:id",component:ExchangeOrderDetailComponent,canActivate: [AuthGuard]
    }
    ,
    {
        "path":"vendor/warehouse",component:WarehouseDetailComponent,canActivate: [AuthGuard]
    }
    ,
    {
        "path":"vendor/add-address",component:AddAddressComponent,canActivate: [AuthGuard]
    }
    ,
    {
        "path":"vendor/view-address",component:ViewAddressComponent,canActivate: [AuthGuard]
    }
    ,
    {
        "path":"vendor/category-stats",component:CategoryStatsComponent,canActivate: [AuthGuard]
    }
    ,
    {
        "path":"vendor/order-stats",component:OrderStatsComponent,canActivate: [AuthGuard]
    }
    ,
    {
        "path":"vendor/product-stats",component:ProductStatsComponent,canActivate: [AuthGuard]

    },
    {
        "path":"vendor/forgot-password/:email",component:ForgotPasswordComponent

    }
    ,
    {
        "path":"vendor/reset-password/:email",component:ResetPasswordComponent

    },
    ,
    {
        "path":"vendor/enter-email",component:EnterEmailComponent

    }

];
