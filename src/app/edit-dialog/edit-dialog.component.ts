import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { UsersActions } from '../store/users.actions';
import { User } from '../store/users.model';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  editForm: FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) private data: User, private store: Store) {
    console.log(this.data)
    this.editForm = new FormGroup({
      name: new FormControl(this.data?.name, [Validators.required]),
      phoneNumber: new FormControl(this.data?.phone, [Validators.required])
    })
  }
  onEdit() {
    this.store.dispatch(UsersActions.saveDialog({ user: this.data, changes: this.editForm.value }))
  }

}
