export default interface IProduct {
  id: number,
  name: string,
  price: number,
  amount: number,
  noNav?: boolean,
  noUpdate?: boolean
}
