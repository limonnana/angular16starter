import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  user!: User;

  editForm = this.fb.group({
    id: [],
    email: ['', [Validators.minLength(10), Validators.maxLength(254)]],
    password: ['',Validators.required, [Validators.maxLength(50)]],
    confirmPassword: ['', Validators.required,[Validators.maxLength(50)]],  
  });

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  save(): void {
    this.updateUser();
    this.userService.create(this.user).subscribe(
      
    );
  }

  private updateUser(): void {
    this.user.login = this.editForm.get(['login'])!.value;
    this.user.email = this.editForm.get(['email'])!.value;
    this.user.password = this.editForm.get(['password'])!.value;
    var confirmPassword = this.editForm.get(['confirmPassword'])!.value;
  }  
}
