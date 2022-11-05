import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersolicitudcarComponent } from './registersolicitudcar.component';

describe('RegistersolicitudcarComponent', () => {
  let component: RegistersolicitudcarComponent;
  let fixture: ComponentFixture<RegistersolicitudcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistersolicitudcarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistersolicitudcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
