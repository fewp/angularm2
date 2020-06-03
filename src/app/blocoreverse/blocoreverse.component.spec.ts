import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoreverseComponent } from './blocoreverse.component';

describe('BlocoreverseComponent', () => {
  let component: BlocoreverseComponent;
  let fixture: ComponentFixture<BlocoreverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocoreverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocoreverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
