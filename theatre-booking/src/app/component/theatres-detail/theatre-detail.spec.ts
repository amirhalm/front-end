import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreDetail } from './theatre-detail';

describe('TheatreDetail', () => {
  let component: TheatreDetail;
  let fixture: ComponentFixture<TheatreDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheatreDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheatreDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
