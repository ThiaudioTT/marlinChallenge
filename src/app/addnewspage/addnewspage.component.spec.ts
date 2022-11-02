import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewspageComponent } from './addnewspage.component';

describe('AddnewspageComponent', () => {
  let component: AddnewspageComponent;
  let fixture: ComponentFixture<AddnewspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
