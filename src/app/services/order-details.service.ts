import { Injectable } from '@angular/core';
import { Ticket } from '../Models/ticket';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  ticketObject: Ticket;

  constructor() {
    this.ticketObject = new Ticket;
  }
}
