import { DoiLinkPipe } from './doi-link.pipe';

describe('DoiLinkPipe', () => {
  it('create an instance', () => {
    const pipe = new DoiLinkPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return expected transformed value', () => {
    const pipe = new DoiLinkPipe();
    const value = 'doi';
    const expectedValue = `https://dx.doi.org/${value}`;
    const transformedValue = pipe.transform(value);
    expect(transformedValue).toBe(expectedValue);
  });
});
