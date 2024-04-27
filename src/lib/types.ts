export type User = {
  name: string;
  icon: string;
}

export type Message = {
  text: string;
  query?: Query[];
}

export type Query = {
  id: number;
  nameId: number;
  name: string;
  industry: string;
  city: string;
  state: string;
  segment: string;
  ownerId: number;
}
