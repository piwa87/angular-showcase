import { convertToInternationalKebab } from './kebab-text';

describe('convertToKebab', () => {
  it('should correctly remove whitespaces and make it lowercase', () => {
    expect(convertToInternationalKebab('Hej med dig')).toBe('hej-med-dig');
    expect(convertToInternationalKebab('Hej    med dig')).toBe('hej-med-dig');
    expect(convertToInternationalKebab('HEJ MED DIG')).toBe('hej-med-dig');
    expect(convertToInternationalKebab('hejMedDig')).toBe('hej-med-dig');
    expect(convertToInternationalKebab('Forsøgt besøgt')).toBe(
      'forsoegt-besoegt'
    );
  });
});
