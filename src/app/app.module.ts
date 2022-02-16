import { BrowserModule } from '@angular/platform-browser';
import { ContentChild, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemsComponent } from './items/items.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CategoriesComponent,
    ItemsComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
