import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStoreComponent } from './movie-store.component';

describe('MovieStoreComponent', () => {
  let component: MovieStoreComponent;
  let fixture: ComponentFixture<MovieStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
