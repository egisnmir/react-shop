export interface IProduct {
  id: number,
  name: string,
  price: number,
  amount: number,
  noNav?: boolean,
  noUpdate?: boolean
}

export interface IProductsList {
  products: IProduct[]
}

export interface IProductDetails {
  id: number,
  name: string,
  price: number
}