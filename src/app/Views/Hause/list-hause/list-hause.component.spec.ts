import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHauseComponent } from './list-hause.component';

describe('ListHauseComponent', () => {
  let component: ListHauseComponent;
  let fixture: ComponentFixture<ListHauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHauseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
