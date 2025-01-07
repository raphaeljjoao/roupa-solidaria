export function getEnumValues(enumType: any): any[] {
  return Object.values(enumType).filter(value => typeof value === 'string');
}
