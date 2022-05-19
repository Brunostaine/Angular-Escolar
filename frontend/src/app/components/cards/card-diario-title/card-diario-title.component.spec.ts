import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiarioTitleComponent } from './card-diario-title.component';

describe('CardDiarioTitleComponent', () => {
  let component: CardDiarioTitleComponent;
  let fixture: ComponentFixture<CardDiarioTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDiarioTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDiarioTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
