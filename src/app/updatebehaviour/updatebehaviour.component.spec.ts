import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebehaviourComponent } from './updatebehaviour.component';

describe('UpdatebehaviourComponent', () => {
  let component: UpdatebehaviourComponent;
  let fixture: ComponentFixture<UpdatebehaviourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatebehaviourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatebehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
