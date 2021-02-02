export as namespace App;

export type DiceType = 4 | 6 | 8 | 10 | 12 | 20 | 100;

export type API = "monsters" | "classes" | "races" | "equipment" | "spells";

export type Alightment =
  | "lawful good"
  | "lawful neutral"
  | "lawful evil"
  | "neutral good"
  | "true neutral"
  | "neutral evil"
  | "chaotic neutral"
  | "chaotic good"
  | "chaotic evil";

export type DataType = null | Monster | PlayerClass

interface Dice {
  die: App.DiceType;
  modifier: number;
}

interface Roll {
  text: string;
  critRoll: boolean;
  critFail: boolean;
  result: number;
}

interface APIResponse {
  count: number;
  results: Item[];
}

interface Item {
  index: string;
  name: string;
  url: string;
}
interface APIResult extends Item {}
interface Proficiency extends Item {}
interface SavingThrow extends Item {}
interface DamageType extends Item {}
interface DCType extends Item {}
interface AbilityScore extends Item {}
interface Language extends Item {}
interface Trait extends Item {}
interface SubClass extends Item {}

interface Monster {
  actions: Action[];
  alignment: Alightment;
  armor_class: number;
  challenge_rating: number;
  charisma: number;
  condition_immunities: Item[];
  constitution: number;
  damage_immunities: string[];
  damage_resistances: string[];
  damage_vulnerabilities: string[];
  dexterity: number;
  hit_dice: string;
  hit_points: number;
  index: string;
  intelligence: number;
  languages: string;
  legendary_actions: {
    name: string;
    desc: string;
  }[];
  name: string;
  proficiencies: {
    value: number;
    proficiency: Proficiency[];
  };
  senses: Record<string, string | number>;
  size: string;
  special_abilities: {
    name: string;
    desc: string;
  }[];
  speed: {
    walk: string;
    fly: string;
    swim: string;
  };
  strength: number;
  subtype?: string;
  type: string;
  url: string;
  wisdom: number;
  xp: number;
}

interface Action {
  attack_bonus?: number;
  damage?:
    | {
        damage_dice: number;
        damage_type: DamageType;
      }[]
    | [null];
  dc?: {
    dc_type: DCType;
    dc_value: number;
    success_type: string;
  };
  desc: string;
  name: string;
  options?: {
    choose: number;
    from: {
      count: number;
      name: string;
      type: string;
    }[];
  };
  usage?: {
    times: number;
    type: string;
  };
}

interface PlayerClass {
  class_levels: string;
  hit_die: number;
  index: string;
  name: string;
  proficiencies: Proficiency[];
  proficiency_choices: {
    choose: number;
    from: Proficiency[];
    type: string;
  }[];
  saving_throws: SavingThrow[];
  starting_equipment: string;
  subclasses: SubClass[];
  url: string;
}

interface Race {
  ability_bonuses: {
    abilityScore: AbilityScore;
    bonus: number;
  };
  age: string;
  alignment: string;
  index: string;
  language_desc: string;
  languages: Language[];
  name: string;
  size: string;
  size_description: string;
  speed: number;
  starting_proficiencies: any[];
  subraces: any[];
  trait_options: {
    from: Trait[];
    choose: number;
    type: string;
  };
  traits: Trait[];
  url: string;
}
