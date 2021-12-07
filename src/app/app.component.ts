import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { UsersActions } from './store/users.actions';
import { User } from './store/users.model';
import { UserSelectors } from './store/users.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: Observable<User[] | null> = this.store.select(UserSelectors.users)
  constructor(private store: Store) {

  }

  ngOnInit() {
    this.store.dispatch(UsersActions.fetchUsers())
  }

  onEdit(user: User) {
    this.store.dispatch(UsersActions.openDialog({ component: EditDialogComponent, data: { data: user } }))
  }
}
