import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlunosComponent } from './create-alunos.component';

describe('CreateAlunosComponent', () => {
  let component: CreateAlunosComponent;
  let fixture: ComponentFixture<CreateAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAlunosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
