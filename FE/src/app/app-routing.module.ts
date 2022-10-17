import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CatalogComponent } from './catalogue/catalog.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { NewBookComponent } from './new-book/new-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'catalog', component: CatalogComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: 'update-book/:id', component: UpdateBookComponent },
  { path: 'new-book', component: NewBookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
