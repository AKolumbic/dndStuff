export as namespace App;

export type DiceType = 4 | 6 | 8 | 10 | 12 | 20 | 100;

export type Dice = {
  die: App.DiceType;
  modifier: number;
  multiplier: number;
};

export type Roll = {
  text: string;
  critRoll: boolean;
  critFail: boolean;
  result: number;
};

export type APIResponse = {
  count: number;
  results: any[];
}

export type APIResult = {
  index: string;
  name: string;
  url: string;
}
