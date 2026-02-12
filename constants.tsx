
import { Specialist, Service } from './types';

export const SPECIALISTS: Specialist[] = [
  { id: '1', name: 'JOHN DOE', rating: 4.8, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200' },
  { id: '2', name: 'MARIE SMITH', rating: 4.8, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200' },
  { id: '3', name: 'NANCY WATSON', rating: 4.8, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200' },
  { id: '4', name: 'PETER JONES', rating: 4.7, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200' },
];

export const SERVICES: Service[] = [
  { id: '1', name: 'Haircut', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&h=300' },
  { id: '2', name: 'Coloring', image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&h=300' },
  { id: '3', name: 'Styling', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=400&h=300' },
  { id: '4', name: 'Shaving', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&h=300' },
  { id: '5', name: 'Trimming', image: 'https://images.unsplash.com/photo-1599351431247-f509f54c71b6?auto=format&fit=crop&w=400&h=300' },
  { id: '6', name: 'Waxing', image: 'https://images.unsplash.com/photo-1570172619991-809600a77296?auto=format&fit=crop&w=400&h=300' },
  { id: '7', name: 'Massage', image: 'https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&w=400&h=300' },
];

export const TIME_SLOTS = [
  '10:00 AM', '10:30 AM', '11:00 AM',
  '11:30 AM', '12:00 PM', '12:30 PM',
  '01:00 PM', '04:30 PM', '05:00 PM',
  '05:30 PM', '06:00 PM', '06:30 PM'
];
