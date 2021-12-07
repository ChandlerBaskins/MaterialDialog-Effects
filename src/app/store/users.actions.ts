import { createAction, props } from '@ngrx/store';
import { ComponentType } from "@angular/cdk/portal";
import { User } from './users.model';
import { MatDialogConfig } from '@angular/material/dialog';

const fetchUsers = createAction('[Users Page] Fetch Users');
const fetchUsersSuccess = createAction(
  '[Users Page] Fetch Users Success',
  props<{ users: User[] }>()
);
const fetchUsersError = createAction(
  '[Users Page] Fetch Users Error ',
  props<{ error: string }>()
);

const editUser = createAction('[Users Page] Edit Users', props<{ user: User }>());
const editUserSuccess = createAction(
  '[Users Page] Edit Users Success',
  props<{ user: User }>()
);
const editUserError = createAction(
  '[Users Page] Edit Users Error ',
  props<{ error: string }>()
);

const openDialog = createAction(
  '[Edit Users Dialog] Open Users Dialog ',
  props<{ component: ComponentType<unknown>, data?: MatDialogConfig<User> }>()
);
const saveDialog = createAction(
  '[Edit Users Dialog] Save Users Dialog ',
  props<{ user: User, changes: { name: string, phoneNumber: string } }>()
);
const closeDialog = createAction(
  '[Edit Users Dialog] Closed Users Dialog ',
  props<{ message: string }>()
);




export const UsersActions = {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersError,
  editUser,
  editUserSuccess,
  editUserError,
  openDialog,
  saveDialog,
  closeDialog
};
