import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDestinosComponent } from './delete-destinos.component';

describe('DeleteDestinosComponent', () => {
  let component: DeleteDestinosComponent;
  let fixture: ComponentFixture<DeleteDestinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDestinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
