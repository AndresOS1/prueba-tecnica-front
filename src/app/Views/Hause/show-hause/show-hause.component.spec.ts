import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHauseComponent } from './show-hause.component';

describe('ShowHauseComponent', () => {
  let component: ShowHauseComponent;
  let fixture: ComponentFixture<ShowHauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHauseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowHauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
