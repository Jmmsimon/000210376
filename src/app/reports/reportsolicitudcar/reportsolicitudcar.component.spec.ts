import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsolicitudcarComponent } from './reportsolicitudcar.component';

describe('ReportsolicitudcarComponent', () => {
  let component: ReportsolicitudcarComponent;
  let fixture: ComponentFixture<ReportsolicitudcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsolicitudcarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsolicitudcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
