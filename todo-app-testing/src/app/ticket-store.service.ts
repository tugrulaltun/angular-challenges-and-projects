import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketStoreService {
  private ticketsSubject = new BehaviorSubject<Ticket[]>([]);
  private ticketsStore: Ticket[] = [
    { id: 1, title: 'Fix bug in production', description: 'Critical bug needs to be fixed', status: 'open' },
    { id: 2, title: 'Add new feature', description: 'New feature needs to be added', status: 'open' }
  ];

  constructor() {
    this.ticketsSubject.next(this.ticketsStore);
  }

  getTickets(): Observable<Ticket[]> {
    return this.ticketsSubject.asObservable();
  }

  addTicket(ticket: Ticket): Observable<Ticket> {
    ticket.id = this.ticketsStore.length + 1;
    this.ticketsStore.push(ticket);
    this.ticketsSubject.next(this.ticketsStore);
    return of(ticket);
  }

  assignTicket(ticketId: number, userId: string): Observable<any> {
    const ticket = this.ticketsStore.find(t => t.id === ticketId);
    if (ticket) {
      ticket.assignedTo = userId;
      this.ticketsSubject.next(this.ticketsStore);
      return of({ success: true });
    } else {
      return of({ success: false, message: "Ticket not found" });
    }
  }

  closeTicket(ticketId: number): Observable<any> {
    const ticket = this.ticketsStore.find(t => t.id === ticketId);
    if (ticket) {
      ticket.status = 'closed';
      this.ticketsSubject.next(this.ticketsStore);
      return of({ success: true });
    } else {
      return of({ success: false, message: "Ticket not found" });
    }
  }
}
