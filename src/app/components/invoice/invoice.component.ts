import {Component, inject, OnInit} from '@angular/core';
import {InvoiceService} from "../../services/invoice.service";
import {Invoice} from "../../models/invoice";
import {InvoiceViewComponent} from "../invoice-view/invoice-view.component";
import {ClientViewComponent} from "../client-view/client-view.component";
import {CompanyViewComponent} from "../company-view/company-view.component";
import {ListItemsComponent} from "../list-items/list-items.component";
import {TotalComponent} from "../total/total.component";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListItemsComponent,
    TotalComponent
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {
  itemService = inject(InvoiceService);

  invoice!: Invoice;

  ngOnInit() {
    this.invoice = this.itemService.getInvoice();
  }


  removeItem(id: number) {
    this.invoice = this.itemService.remove(id);
  }
}
