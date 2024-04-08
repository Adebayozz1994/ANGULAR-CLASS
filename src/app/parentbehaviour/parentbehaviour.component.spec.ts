import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentbehaviourComponent } from './parentbehaviour.component';

describe('ParentbehaviourComponent', () => {
  let component: ParentbehaviourComponent;
  let fixture: ComponentFixture<ParentbehaviourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentbehaviourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentbehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
