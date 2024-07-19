import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDestinosComponent } from './post-destinos.component';

describe('PostDestinosComponent', () => {
  let component: PostDestinosComponent;
  let fixture: ComponentFixture<PostDestinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDestinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
