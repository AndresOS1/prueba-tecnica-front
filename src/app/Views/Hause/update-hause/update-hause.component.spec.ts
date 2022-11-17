import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHauseComponent } from './update-hause.component';

describe('UpdateHauseComponent', () => {
  let component: UpdateHauseComponent;
  let fixture: ComponentFixture<UpdateHauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHauseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
