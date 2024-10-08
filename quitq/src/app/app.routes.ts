import { Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { HomeComponent } from './component/customer/home/home.component';
import { SearchComponent } from './component/customer/search/search.component';
import { CartViewComponent } from './component/customer/cart/cart-view/cart-view.component';
import { SignupComponent } from './component/auth/signup/signup.component';
import { LogoutComponent } from './component/auth/logout/logout.component';
import { WishlistViewComponent } from './component/customer/wishlist/wishlist-view/wishlist-view.component';
import { OrderViewComponent } from './component/customer/order/order-view/order-view.component';
import { OrderDetailsComponent } from './component/customer/order/order-details/order-details.component';
import { ProductDetailsComponent } from './component/customer/product/product-details/product-details.component';
import { ProfileComponent } from './component/customer/profile/profile.component';

export const routes: Routes = [
    
    {
        "path" : "" , component: HomeComponent,
    },
    {
        "path" : "auth/login" , component: LoginComponent,
    },
    {
        "path" : "customer/search" , component: SearchComponent,
    },
    {
        "path" : "customer/cart" , component: CartViewComponent
    },
    {
        "path" : "auth/signup" , component: SignupComponent,
    },
    {
        "path" : "customer/home" , component: HomeComponent,
    },
    {
        "path" : "auth/logout" , component: LogoutComponent,
    },
    {
        "path" : "customer/cart" , component: CartViewComponent,
    },
    {
        "path" : "customer/wishlist" , component: WishlistViewComponent,
    },
    {
        "path" : "customer/orders" , component: OrderViewComponent,
    },
    {
        "path" : "customer/view-order-details" , component: OrderDetailsComponent,
    },
    {
        "path" : "customer/view-product-details" , component: ProductDetailsComponent,
    },
    {
        "path" : "customer/profile" , component: ProfileComponent,
    }
    // {
    //     "path" : "" , component: ,
    // }
    // {
    //     "path" : "" , component: ,
    // }
    // {
    //     "path" : "" , component: ,
    // }
    // {
    //     "path" : "" , component: ,
    // }
    // {
    //     "path" : "" , component: ,
    // }
    // {
    //     "path" : "" , component: ,
    // }
    // {
    //     "path" : "" , component: ,
    // }
];
