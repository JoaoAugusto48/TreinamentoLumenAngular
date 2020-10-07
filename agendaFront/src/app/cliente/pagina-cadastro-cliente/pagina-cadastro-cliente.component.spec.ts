import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCadastroClienteComponent } from './pagina-cadastro-cliente.component';

describe('PaginaCadastroClienteComponent', () => {
  let component: PaginaCadastroClienteComponent;
  let fixture: ComponentFixture<PaginaCadastroClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCadastroClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCadastroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
