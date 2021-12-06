import { Action, createReducer, on } from '@ngrx/store';
import { UsersActions } from './users.actions';
import { UserState } from './users.model';

export const initialState: UserState = {
  users: null,
  isLoadingUsers: null,
  isLoadingUsersError: null,
};

const reducer = createReducer(
  initialState,
  //FIRST FETCH
  on(UsersActions.fetchUsers, (state) => ({
    ...state,
    isLoadingUsers: true,
    isLoadingUsersError: null,
  })),
  on(UsersActions.fetchUsersSuccess, (state, payload) => ({
    ...state,
    users: payload.users,
    isLoadingUsers: false,
    isLoadingUsersError: null,
  })),
  on(UsersActions.fetchUsersError, (state, payload) => ({
    ...state,
    isLoadingUsers: false,
    isLoadingUsersError: payload.error,
  })),
  //EDIT
  on(UsersActions.editUser, (state) => ({
    ...state,
    isLoadingUsers: true,
    isLoadingUsersError: null,
  })),
  on(UsersActions.editUserSuccess, (state, payload) => ({
    ...state,
    users: payload.users,
    isLoadingUsers: false,
    isLoadingUsersError: null,
  })),
  on(UsersActions.editUserError, (state, payload) => ({
    ...state,
    isLoadingUsers: false,
    isLoadingUsersError: payload.error,
  }))
);

export function usersReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
