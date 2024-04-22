import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriacomponenetComponent } from './materiacomponenet.component';

describe('MateriacomponenetComponent', () => {
  let component: MateriacomponenetComponent;
  let fixture: ComponentFixture<MateriacomponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriacomponenetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MateriacomponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
