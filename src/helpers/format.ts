export function format(num: number) {
  return new Intl.NumberFormat().format(num);
}
