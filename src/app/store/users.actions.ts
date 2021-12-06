import { createAction, props } from '@ngrx/store';
import { ComponentType } from "@angular/cdk/portal";
import { User } from './users.model';

const fetchUsers = createAction('[Users Page] Fetch Users');
const fetchUsersSuccess = createAction(
  '[Users Page] Fetch Users Success',
  props<{ users: User[] }>()
);
const fetchUsersError = createAction(
  '[Users Page] Fetch Users Error ',
  props<{ error: string }>()
);

const editUser = createAction('[Users Page] Edit Users');
const editUserSuccess = createAction(
  '[Users Page] Edit Users Success',
  props<{ users: User[] }>()
);
const editUserError = createAction(
  '[Users Page] Edit Users Error ',
  props<{ error: string }>()
);

const openDialog = createAction(
  '[Edit Users Dialog] Open Users Dialog ',
  props<{ component: ComponentType<unknown>, data?: any }>()
);
const saveDialog = createAction(
  '[Edit Users Dialog] Save Users Dialog ',
  props<{ user: User }>()
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
