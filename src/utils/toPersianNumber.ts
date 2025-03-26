const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

export function toPersianNumbersWithComma(n: string) {
  const numWithCommas = numberWithCommas(n)
  const persianNumber = toPersianNumbers(numWithCommas)
  return persianNumber
}

function numberWithCommas(x: string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function toPersianNumbers(n: string) {
  return n.toString().replace(/\d/g, x => farsiDigits[Number.parseInt(x)])
}
