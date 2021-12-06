import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./users.model";






const selectUsersFeature = createFeatureSelector<UserState>('users')

const isLoadingUsers = createSelector(selectUsersFeature, state => state.isLoadingUsers)
const users = createSelector(selectUsersFeature, state => state.users)
const isLoadingUsersError = createSelector(selectUsersFeature, state => state.isLoadingUsersError)


export const UserSelectors = {
  isLoadingUsers, users, isLoadingUsersError
}