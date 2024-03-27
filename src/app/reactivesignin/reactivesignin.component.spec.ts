import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivesigninComponent } from './reactivesignin.component';

describe('ReactivesigninComponent', () => {
  let component: ReactivesigninComponent;
  let fixture: ComponentFixture<ReactivesigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactivesigninComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactivesigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
