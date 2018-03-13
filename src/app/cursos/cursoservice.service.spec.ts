import { TestBed, inject } from '@angular/core/testing';

import { CursoserviceService } from './cursoservice.service';

describe('CursoserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursoserviceService]
    });
  });

  it('should be created', inject([CursoserviceService], (service: CursoserviceService) => {
    expect(service).toBeTruthy();
  }));
});
