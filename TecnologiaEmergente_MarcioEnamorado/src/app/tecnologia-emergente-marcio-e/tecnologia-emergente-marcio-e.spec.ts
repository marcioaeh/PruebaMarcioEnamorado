import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaEmergenteMarcioE } from './tecnologia-emergente-marcio-e';

describe('TecnologiaEmergenteMarcioE', () => {
  let component: TecnologiaEmergenteMarcioE;
  let fixture: ComponentFixture<TecnologiaEmergenteMarcioE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnologiaEmergenteMarcioE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiaEmergenteMarcioE);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
