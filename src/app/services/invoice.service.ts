import {Injectable} from '@angular/core';
import {Invoice} from "../models/invoice";
import {invoiceData} from "../data/invoice.data";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice: Invoice = invoiceData

  constructor() {
  }

  getInvoice(): Invoice {
    const total = this.calculateTotal()
    return {...this.invoice, total};
  }

  calculateTotal() {
    //  THIS IS ONE WAY OF DOING

    // let total = 0;
    //   this.invoice.items.forEach(item => {
    //     total = total + item.price;
    //   });
    //   return total;

    //  THIS IS ANOTHER WAY OF DOING
    // let total = 0;
    // this.invoice.items.forEach(item => {
    //   total += item.total();
    // });
    // return total;

    //  THIS IS "SIMPLER"
    return this.invoice.items.reduce((total, item) => total + item.total(), 0);
  }
}
