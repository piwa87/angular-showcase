export function convertToInternationalKebab(inputString: string): string {
  const kebabString = inputString
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[æÆ]/g, 'ae')
    .replace(/[øØ]/g, 'oe')
    .replace(/[åÅ]/g, 'aa')
    .replace(',', '');
  return kebabString.toLowerCase().replace(/\s+/g, '-');
}
