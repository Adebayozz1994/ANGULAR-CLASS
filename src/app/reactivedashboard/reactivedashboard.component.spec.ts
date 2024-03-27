import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivedashboardComponent } from './reactivedashboard.component';

describe('ReactivedashboardComponent', () => {
  let component: ReactivedashboardComponent;
  let fixture: ComponentFixture<ReactivedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactivedashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactivedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
