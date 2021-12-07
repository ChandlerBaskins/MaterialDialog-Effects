import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { usersReducer } from './store/users.reducers';
import { UserEffects } from './store/users.effects';
import { EffectsModule } from '@ngrx/effects';
import { UsersService } from './store/users.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [AppComponent, EditDialogComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ users: usersReducer }, {
      runtimeChecks: {
        strictActionImmutability: false,
      },
    }),
    EffectsModule.forRoot([UserEffects]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule { }


