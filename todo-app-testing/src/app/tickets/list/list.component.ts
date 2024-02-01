import {Component, OnInit} from '@angular/core';
import {TicketStoreService} from "../../ticket-store.service";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  tickets: Ticket[] = [];
  filteredTickets: Ticket[] = [];
  filterStatus: 'all' | 'open' | 'closed' = 'all';

  constructor(private ticketStoreService: TicketStoreService) {
  }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.ticketStoreService.getTickets().subscribe({
      next: (tickets: Ticket[]) => { // Type annotation added here
        this.tickets = tickets;
        this.applyFilter();
      },
      error: (error: any) => console.error('There was an error loading the tickets', error)
    });
  }

  applyFilter(): void {
    if (this.filterStatus === 'all') {
      this.filteredTickets = [...this.tickets];
    } else {
      this.filteredTickets = this.tickets.filter(ticket => ticket.status === this.filterStatus);
    }
  }

  createTicket(title: string, description: string): void {
    const newTicket: Ticket = {
      id: this.tickets.length + 1,
      title,
      description,
      status: 'open'
    };
    this.ticketStoreService.addTicket(newTicket).subscribe({
      next: () => this.loadTickets(),
      error: (error: any) => console.error('There was an error creating the ticket', error)
    });
  }

  assignTicket(ticketId: number, userId: string): void {
    this.ticketStoreService.assignTicket(ticketId, userId).subscribe({
      next: () => this.loadTickets(),
      error: (error: any) => console.error('There was an error assigning the ticket', error)
    });
  }

  closeTicket(ticketId: number): void {
    this.ticketStoreService.closeTicket(ticketId).subscribe({
      next: () => this.loadTickets(),
      error: (error: any) => console.error('There was an error closing the ticket', error)
    });
  }

  onFilterChange(filter: 'all' | 'open' | 'closed'): void {
    this.filterStatus = filter;
    this.applyFilter();
  }
}
