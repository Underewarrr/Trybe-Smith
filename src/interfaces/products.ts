interface IProduct {
  amount: string,
  name: string,
}

interface Id extends IProduct {
  id: number,
}

export { 
  Id, 
  IProduct, 
};