import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { UsersActions } from './users.actions';
import { User } from './users.model';
import { UsersService } from './users.service';
import { MatDialog } from "@angular/material/dialog";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private usersService: UsersService, private dialog: MatDialog) { }


  fetchUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.fetchUsers),
    switchMap(() => this.usersService.getUsers().pipe(
      map((users: User[]) => {
        return UsersActions.fetchUsersSuccess({ users })
      }),
      catchError((error) => of(UsersActions.fetchUsersError({ error })))
    )),
  ))


  // editUsers$ = createEffect(() => this.actions$.pipe())
  openDialog$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.openDialog),
    tap(({ component, data }) => this.dialog.open(component, data)),
  ), { dispatch: false })
}
