import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroPessoas } from './cadastro-pessoas.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('CadastroPessoas', () => {
  let component: CadastroPessoas;
  let fixture: ComponentFixture<CadastroPessoas>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ CadastroPessoas ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPessoas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
