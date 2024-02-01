import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {TicketStoreService} from './ticket-store.service';

describe('TicketStoreService', () => {
  let service: TicketStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable of tickets', (done) => {
    service.getTickets().subscribe(tickets => {
      expect(tickets.length).toBe(2);
      expect(tickets[0].id).toBe(1);
      expect(tickets[1].id).toBe(2);
      done();
    });
  });

  it('should add a ticket and return it', fakeAsync(() => {
    // Explicitly declare newTicket as a Ticket to ensure type compatibility
    const newTicket: Ticket = {
      id: 0,
      title: 'New Task',
      description: 'Do something new',
      status: 'open'
    };

    service.addTicket(newTicket).subscribe(ticket => {
      expect(ticket.id).toBe(3);
      expect(ticket.title).toBe('New Task');
    });

    tick();

    service.getTickets().subscribe(tickets => {
      expect(tickets.length).toBe(3);
      expect(tickets.find(t => t.id === newTicket.id)?.title).toBe('New Task');
    });
  }));

  it('should assign a ticket to a user', fakeAsync(() => {
    service.assignTicket(1, 'user123').subscribe(response => {
      expect(response.success).toBeTrue();
    });

    tick();

    service.getTickets().subscribe(tickets => {
      expect(tickets.find(t => t.id === 1)?.assignedTo).toBe('user123');
    });
  }));

  it('should close a ticket', fakeAsync(() => {
    service.closeTicket(1).subscribe(response => {
      expect(response.success).toBeTrue();
    });

    tick();

    service.getTickets().subscribe(tickets => {
      expect(tickets.find(t => t.id === 1)?.status).toBe('closed');
    });
  }));
});
