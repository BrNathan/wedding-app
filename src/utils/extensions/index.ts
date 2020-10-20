
export function IsNullOrEmpty(value: string | null): boolean {
  return value === null || value === '';
}

export function IsNullOrWhiteSpace(value: string | null): boolean {
  return value === null || IsNullOrEmpty(value.trim());
}

// eslint-disable-next-line
export function IsNullOrUndefined(obj: any): boolean {
  return obj === null || obj === undefined;
}
