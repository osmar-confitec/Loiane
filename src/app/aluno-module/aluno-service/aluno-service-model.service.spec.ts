import { TestBed, inject } from '@angular/core/testing';

import { AlunoServiceModelService } from './aluno-service-model.service';

describe('AlunoServiceModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunoServiceModelService]
    });
  });

  it('should be created', inject([AlunoServiceModelService], (service: AlunoServiceModelService) => {
    expect(service).toBeTruthy();
  }));
});
