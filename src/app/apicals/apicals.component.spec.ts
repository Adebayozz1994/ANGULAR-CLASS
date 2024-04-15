import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicalsComponent } from './apicals.component';

describe('ApicalsComponent', () => {
  let component: ApicalsComponent;
  let fixture: ComponentFixture<ApicalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApicalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
