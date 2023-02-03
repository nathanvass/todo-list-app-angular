
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.development';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
//import { TodoFilterPipePipe } from './pipes/todo-filter-pipe.pipe';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { TodoFilterPipePipe } from './pipes/todo-filter-pipe.pipe';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { faSquare, faCheckSquare, faCoffee, faPersonThroughWindow, faPersonArrowUpFromLine } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DashboardComponent,
    TodoFilterPipePipe
  ],
  imports: [
    FormsModule,
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      faCoffee,
      faPersonThroughWindow,
      faPersonArrowUpFromLine
    );
  }
 }
