import {Invoice} from "../models/invoice";

export const invoiceData: Invoice = {
  id: 1,
  name: 'Componente de PC',
  client: {
    name: 'Ram',
    lastname: 'Garcia',
    address: {
      country: 'Mexico',
      city: 'CDMX',
      street: 'One Street 123',
      number: 15,
    }
  },
  company: {
    name: 'Tech Solutions',
    fiscalNumber: 23424
  },
  items: [
    {
      id: 1,
      product: 'Motherboard',
      price: 599,
      quantity: 1
    },
    {
      id: 2,
      product: 'Graphics Card',
      price: 890,
      quantity: 3
    },
    {
      id: 1,
      product: 'RAM Memory',
      price: 299,
      quantity: 10
    },
  ]
}
