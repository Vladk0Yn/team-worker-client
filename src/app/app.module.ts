import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./MaterialModule";
import {authErrorInterceptorProvider, ErrorInterceptorService} from "./helpers/error-interceptor.service";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MainComponent } from './admin/main-admin/main.component';
import {AuthInterceptorService} from "./helpers/auth-interceptor.service";
import { EditUserComponent } from './admin/users/edit-user/edit-user.component';
import { UsersComponent } from './admin/users/users.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { TasksComponent } from './admin/tasks/tasks.component';
import { MainUserComponent } from './main-user/main-user.component';
import { EditProjectComponent } from './admin/projects/edit-project/edit-project.component';
import { AddUserToProjectComponent } from './admin/users/add-user-to-project/add-user-to-project.component';
import { AddPositionToProjectComponent } from './admin/projects/add-position-to-project/add-position-to-project.component';
import { DeletePositionFromProjectComponent } from './admin/projects/delete-position-from-project/delete-position-from-project.component';
import { MoreInfoTaskComponent } from './admin/tasks/more-info-task/more-info-task.component';
import { AddTaskComponent } from './admin/tasks/add-task/add-task.component';
import { UserHeaderComponent } from './main-user/user-header/user-header.component';
import { UserTasksComponent } from './main-user/user-tasks/user-tasks.component';
import { MoreUserTaskComponent } from './main-user/user-tasks/more-user-task/more-user-task.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { DeletePositionByUserComponent } from './admin/users/delete-position-by-user/delete-position-by-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    EditUserComponent,
    UsersComponent,
    AdminHeaderComponent,
    ProjectsComponent,
    TasksComponent,
    MainUserComponent,
    EditProjectComponent,
    AddUserToProjectComponent,
    AddPositionToProjectComponent,
    DeletePositionFromProjectComponent,
    MoreInfoTaskComponent,
    AddTaskComponent,
    UserHeaderComponent,
    UserTasksComponent,
    MoreUserTaskComponent,
    StatisticsComponent,
    DeletePositionByUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: ErrorInterceptorService, useValue: authErrorInterceptorProvider}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
