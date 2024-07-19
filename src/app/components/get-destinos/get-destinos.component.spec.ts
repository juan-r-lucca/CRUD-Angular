import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDestinosComponent } from './get-destinos.component';

describe('GetDestinosComponent', () => {
  let component: GetDestinosComponent;
  let fixture: ComponentFixture<GetDestinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDestinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
