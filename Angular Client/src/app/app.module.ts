import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserGridComponent } from './user-grid/user-grid.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';

const appRoutes: Routes = [
  {path: 'add-user', component: AddUserComponent},
  {path: 'user-grid', component: UserGridComponent},
  {path: 'edit-user', component: EditUserComponent},
  {path: 'edit-user/user-grid', component: UserGridComponent},
  {path: 'add-user/user-grid', component: UserGridComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UserGridComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
