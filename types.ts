
export enum Screen {
  SPLASH = 'SPLASH',
  AUTH = 'AUTH',
  DASHBOARD = 'DASHBOARD',
  BOOKING = 'BOOKING',
  APPOINTMENTS = 'APPOINTMENTS'
}

export interface Specialist {
  id: string;
  name: string;
  rating: number;
  image: string;
}

export interface Service {
  id: string;
  name: string;
  image: string;
}

export interface Appointment {
  id: string;
  date: string;
  time: string;
  specialist: string;
  service: string;
  price: number;
  status: 'confirmed' | 'pending';
}
