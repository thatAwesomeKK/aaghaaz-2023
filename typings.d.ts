export type EventBody = {
  eventName: string;
  eventId: number;
  venue: string;
  date: string;
  cashPrize?: string[];
  superr: string;
  img: string;
  description: string;
  rLink: string;
  contact: {
    s_coord: {
      name: string;
      number?: number;
    }[];
    t_coord: string[];
  };
  time: string;
  poster: string;
  rules: string[];
};

type Coordinator = {
  s_coord: {
    name: string;
    number?: number;
  }[];
  t_coord: string[];
};
