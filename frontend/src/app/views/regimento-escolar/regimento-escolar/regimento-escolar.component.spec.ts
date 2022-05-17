import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimentoEscolarComponent } from './regimento-escolar.component';

describe('RegimentoEscolarComponent', () => {
  let component: RegimentoEscolarComponent;
  let fixture: ComponentFixture<RegimentoEscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegimentoEscolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegimentoEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
