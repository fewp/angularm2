import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoPrimengComponent } from './estado-primeng.component';

describe('EstadoPrimengComponent', () => {
  let component: EstadoPrimengComponent;
  let fixture: ComponentFixture<EstadoPrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoPrimengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
