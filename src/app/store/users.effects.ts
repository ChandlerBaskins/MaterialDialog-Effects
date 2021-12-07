import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of, switchMap, tap } from 'rxjs';
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



  editUser$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.editUser),
    concatMap(({ user }) => this.usersService.editUser(user).pipe(
      map((user) => UsersActions.editUserSuccess({ user }))
    ))
  ))
  editUserSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.editUserSuccess),
    map(() => UsersActions.closeDialog({ message: "SUCCESS" }))
  ))
  openDialog$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.openDialog),
    tap(({ component, data }) => this.dialog.open(component, data)),
  ), { dispatch: false })

  saveDialog$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.saveDialog),
    switchMap(({ user, changes }) => {
      const editUser: User = { ...user, name: changes.name, phone: changes.phoneNumber }
      return of(UsersActions.editUser({ user: editUser }))
    })
  ))

  closeDialog$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.editUserSuccess),
    tap(() => this.dialog.closeAll()),

  ), { dispatch: false })
}
