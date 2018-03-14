import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroNomeComponent } from './primeiro-nome.component';

describe('PrimeiroNomeComponent', () => {
  let component: PrimeiroNomeComponent;
  let fixture: ComponentFixture<PrimeiroNomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiroNomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
