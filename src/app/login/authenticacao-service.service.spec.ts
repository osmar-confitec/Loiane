import { TestBed, inject } from '@angular/core/testing';

import { AuthenticacaoServiceService } from './authenticacao-service.service';

describe('AuthenticacaoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticacaoServiceService]
    });
  });

  it('should be created', inject([AuthenticacaoServiceService], (service: AuthenticacaoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
