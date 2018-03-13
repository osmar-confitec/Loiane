import { TestBed, inject } from '@angular/core/testing';

import { AlunoGuardResolvedService } from './aluno-guard-resolved.service';

describe('AlunoGuardResolvedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunoGuardResolvedService]
    });
  });

  it('should be created', inject([AlunoGuardResolvedService], (service: AlunoGuardResolvedService) => {
    expect(service).toBeTruthy();
  }));
});
