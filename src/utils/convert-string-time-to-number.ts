export function convertStringTimeToNumber(time: string) {
  return Number(time.replace(':', ''))
}
