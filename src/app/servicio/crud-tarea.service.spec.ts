import { TestBed } from '@angular/core/testing';

import { CrudTareaService } from './crud-tarea.service';

describe('CrudTareaService', () => {
  let service: CrudTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
