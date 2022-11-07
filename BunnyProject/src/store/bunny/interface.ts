export interface Bunny {
  id: number;
  name: string;
  color: string;
  cuteness: number;
}

export interface colorChoice {
  [key: number]: string;
}

export interface Store {
  bunnies: Bunny[];
  loading:boolean,
  error:string
}
