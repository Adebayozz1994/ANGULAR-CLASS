import { Component } from '@angular/core';
import { MateriamoduleModule } from '../materiamodule/materiamodule.module';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-materiacomponenet',
  standalone: true,
  imports: [MateriamoduleModule,ReactiveFormsModule,FormsModule],
  templateUrl: './materiacomponenet.component.html',
  styleUrl: './materiacomponenet.component.css',
  providers: [provideNativeDateAdapter()],
})
export class MateriacomponenetComponent {
  public duration:any = 5
  panelOpenState = false;
  hide = true;
  constructor(private builder:FormBuilder,private _snackBar: MatSnackBar) {
    
  }
  public firstFormGroup = this.builder.group({
  'full_name': new FormControl('', [Validators.required]),
  "email": new FormControl('', [Validators.required, Validators.email]),
    
  })

  public secondFormGroup = this.builder.group({
    'address':new FormControl('', [Validators.required]),
  })

   openSnackBar (message: string, action: string){

    this._snackBar.open(message, action, {
      duration: 2000,
    })
    
  }
  openCustomSnackBar(){
this._snackBar.openFromComponent(ChildComponent, {
  duration: this.duration * 1000
});
  
}


}


