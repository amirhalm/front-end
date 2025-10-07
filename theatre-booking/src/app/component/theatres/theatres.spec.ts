import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theatres } from './theatres';

describe('Theatres', () => {
  let component: Theatres;
  let fixture: ComponentFixture<Theatres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Theatres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Theatres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
