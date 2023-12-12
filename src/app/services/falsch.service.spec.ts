

import { FalschService } from './falsch.service';

describe('FalschService', () => {
  let service: FalschService;
  let HttpClientSpy: any;
  beforeEach(() => {
    service = new FalschService(HttpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
