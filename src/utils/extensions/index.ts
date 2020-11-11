
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

export function GenerateGuid(): string {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}
