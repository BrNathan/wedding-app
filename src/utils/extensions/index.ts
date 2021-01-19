
// eslint-disable-next-line
export function IsNullOrUndefined(obj: any): boolean {
  return obj === null || obj === undefined;
}

export function IsNullOrEmpty(value: string | null | undefined): boolean {
  return IsNullOrUndefined(value) || value === '';
}

export function IsNullOrWhiteSpace(value: string | null | undefined): boolean {
  return IsNullOrUndefined(value) || IsNullOrEmpty((value as string).trim());
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

export function shuffleArray<T>(array: T[]) {
  let currentIndex = array.length;
  let temporaryValue: T;
  let randomIndex: number;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array.sort(function() { return 0.5 - Math.random(); });
}
