import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CdkDrag} from '@angular/cdk/drag-drop';





@NgModule({
  declarations: [],
  imports: [
    CdkDrag,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonToggleModule
  ],
  exports:[
    CdkDrag,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonToggleModule

  ],
})
export class MateriamoduleModule { }
