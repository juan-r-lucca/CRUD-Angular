import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutDestinosComponent } from './put-destinos.component';

describe('PutDestinosComponent', () => {
  let component: PutDestinosComponent;
  let fixture: ComponentFixture<PutDestinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutDestinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
