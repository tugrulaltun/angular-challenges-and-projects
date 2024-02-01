interface Ticket {
  id: number;
  title: string;
  description: string;
  assignedTo?: string;
  status: 'open' | 'closed';
}
