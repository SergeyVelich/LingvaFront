import { TestBed } from '@angular/core/testing';

import { BodyComponent } from '../../components/body/body.component';
import { Body } from './body.service';

describe('Body', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      BodyComponent
    ],
  }));

  describe('childRoutes', () => {
    it('should create routes as children of body', () => {
      // Prepare
      const testRoutes = [{ path: 'test' }];

      // Act
      const result = Body.childRoutes(testRoutes);

      // Assert
      expect(result.path).toBe('');
      expect(result.children).toBe(testRoutes);
      expect(result.component).toBe(BodyComponent);
    });
  });
});
