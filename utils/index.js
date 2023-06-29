export const moneyFormat = value => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })
}
