export interface Iorder {
  id:number,
  orderItem:string,
    imgUrl: string,
    price: Float32Array,
    quantity: BigInteger,
    orderStatus: string,
    orderedDate: Date,
    deliveryDate:Date
}
