import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedDateComponent } from './published-date.component';

describe('PublishedDateComponent', () => {
  let component: PublishedDateComponent;
  let fixture: ComponentFixture<PublishedDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishedDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishedDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
