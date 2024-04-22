import { Component } from '@angular/core';
import { MateriamoduleModule } from '../materiamodule/materiamodule.module';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-materiacomponenet',
  standalone: true,
  imports: [MateriamoduleModule,ReactiveFormsModule],
  templateUrl: './materiacomponenet.component.html',
  styleUrl: './materiacomponenet.component.css',
  providers: [provideNativeDateAdapter()],
})
export class MateriacomponenetComponent {
  panelOpenState = false;
  hide = true;
  constructor(private builder:FormBuilder) {
    
  }
  public firstFormGroup = this.builder.group({
  'full_name': new FormControl('', [Validators.required]),
  "email": new FormControl('', [Validators.required, Validators.email]),
    
  })

  public secondFormGroup = this.builder.group({
    'address':new FormControl('', [Validators.required]),
  })

}
