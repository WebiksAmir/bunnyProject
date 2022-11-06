export interface Duck {
  id: number;
  name: string;
  color: string;
  cuteness: number;
}

export interface colorChoice {
  [key: number]: string;
}

export interface Store {
  ducks: Duck[];
}
