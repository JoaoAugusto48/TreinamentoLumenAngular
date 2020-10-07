import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaListagemClienteComponent } from './pagina-listagem-cliente.component';

describe('PaginaListagemClienteComponent', () => {
  let component: PaginaListagemClienteComponent;
  let fixture: ComponentFixture<PaginaListagemClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaListagemClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaListagemClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
