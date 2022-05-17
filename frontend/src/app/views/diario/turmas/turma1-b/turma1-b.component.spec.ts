import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Turma1BComponent } from './turma1-b.component';

describe('Turma1BComponent', () => {
  let component: Turma1BComponent;
  let fixture: ComponentFixture<Turma1BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Turma1BComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Turma1BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
