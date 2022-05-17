import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Turma1AComponent } from './turma1-a.component';

describe('Turma1AComponent', () => {
  let component: Turma1AComponent;
  let fixture: ComponentFixture<Turma1AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Turma1AComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Turma1AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
