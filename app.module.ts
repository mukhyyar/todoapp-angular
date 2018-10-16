import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaeModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
	//AngularFireDatabaeModule.initializeApp(environment.firebase),
	//AngularFireDatabaeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
