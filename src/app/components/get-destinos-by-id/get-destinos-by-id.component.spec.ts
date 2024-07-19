import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDestinosByIdComponent } from './get-destinos-by-id.component';

describe('GetDestinosByIdComponent', () => {
  let component: GetDestinosByIdComponent;
  let fixture: ComponentFixture<GetDestinosByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDestinosByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDestinosByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
