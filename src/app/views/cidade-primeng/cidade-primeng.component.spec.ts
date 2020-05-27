import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CidadePrimengComponent } from './cidade-primeng.component';

describe('CidadePrimengComponent', () => {
  let component: CidadePrimengComponent;
  let fixture: ComponentFixture<CidadePrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadePrimengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadePrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
