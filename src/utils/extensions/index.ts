
// eslint-disable-next-line
export function IsNullOrUndefined(obj: any): boolean {
  return obj === null || obj === undefined;
}

export function IsNullOrEmpty(value: string | null): boolean {
  return IsNullOrUndefined(value) || value === '';
}

export function IsNullOrWhiteSpace(value: string | null): boolean {
  return value === null || IsNullOrEmpty(value.trim());
}
