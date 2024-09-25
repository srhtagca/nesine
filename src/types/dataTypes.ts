export type OC = {
  [key: number]: {
    G: string;
    ID: string;
    IMF: boolean;
    MBS: string;
    N: string;
    O: string;
    OD: number;
  };
};

export type OCG = {
  [key: number]: {
    ID: string;
    MBS: string;
    N: string;
    OC: OC;
    SO: number;
  };
};

export type DataType = {
  C: string;
  D: string;
  DAY: string;
  HEC: boolean;
  IMF: boolean;
  LN: string;
  N: string;
  NID: string;
  OCG: OCG;
  S: string;
  T: string;
  TYPE: string;
};
