import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHauseComponent } from './create-hause.component';

describe('CreateHauseComponent', () => {
  let component: CreateHauseComponent;
  let fixture: ComponentFixture<CreateHauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHauseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
