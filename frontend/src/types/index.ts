export interface Service {
  slug: string;
  title: string;
  short: string;
}

export interface AppointmentPayload {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
}

export interface Review {
  id: number;
  author: string;
  text: string;
}
