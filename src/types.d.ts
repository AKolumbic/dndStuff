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

export type DataType = null | Monster | PlayerClass | Race | Equipment | Spell;

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
  results: GenericObj[];
}

interface GenericObj {
  index: string;
  name: string;
  url: string;
}

interface Monster {
  actions: Action[];
  alignment: Alightment;
  armor_class: number;
  challenge_rating: number;
  charisma: number;
  condition_immunities: GenericObj[];
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
    proficiency: GenericObj[];
  };
  senses: Record<string, string | number>;
  size: string;
  special_abilities: {
    name: string;
    desc: string;
    damage?: Damage;
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
  damage?: Damage;
  dc?: {
    dc_type: GenericObj;
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

export type Damage =
  | {
      damage_dice: number | string;
      damage_type: GenericObj;
    }
  | {
      damage_dice: number | string;
      damage_type: GenericObj;
    }[]
  | [null];

interface PlayerClass extends GenericObj {
  class_levels: string;
  hit_die: number;
  proficiencies: GenericObj[];
  proficiency_choices: {
    choose: number;
    from: GenericObj[];
    type: string;
  }[];
  saving_throws: GenericObj[];
  starting_equipment: string;
  subclasses: GenericObj[];
}

interface Race extends GenericObj {
  ability_bonuses?: {
    abilityScore: GenericObj;
    bonus: number;
  };
  age?: string;
  alignment?: string;
  language_desc?: string;
  languages?: GenericObj[];
  size?: string;
  size_description?: string;
  speed?: number;
  starting_proficiencies?: any[];
  subraces?: any[];
  trait_options?: {
    from: GenericObj[];
    choose: number;
    type: string;
  };
  traits?: GenericObj[];
}

interface Equipment extends GenericObj {
  category_range?: string;
  cost?: {
    quantity: number;
    unit: string;
  };
  desc?: string[];
  damage?: Damage;
  equipment_category?: GenericObj;
  gear_category?: GenericObj;
  properties?: GenericObj[];
  range?: {
    normal: number;
    long: null | number;
  };
  tool_category?: string;
  two_handed_damage?: Damage;
  weapon_category?: string;
  weapon_range?: string;
  weight?: ?number;
}

interface Spell extends GenericObj {
  area_of_effect?: { type: string; size: number };
  casting_time?: string;
  classes?: GenericObj[];
  components?: string[];
  concentration?: true;
  desc?: string[];
  duration?: string;
  level?: number;
  range?: string;
  ritual?: boolean;
  school?: GenericObj;
  subclasses?: GenericObj[];
}

interface PlayerCharacter {
  actions: {
    background: any;
    class: any[];
    feat: any[];
    item: any;
    race: any[];
  };
  activeSourceCategories: number[];
  adjustmentXp: any;
  age: number;
  alignmentId: number;
  avatarId: number;
  avatarUrl: string;
  backdropAvatarId: any;
  backdropAvatarUrl: any;
  background: any;
  baseHitPoints: number;
  bonusHitPoints: any;
  bonusStats: any[];
  campaign: any;
  characterValues: any[];
  choices: {
    background: any;
    class: any[];
    feat: any[];
    item: any;
    race: any[];
  };
  classSpells: any[];
  classes: any[];
  conditions: any[];
  configuration: {
    abilityScoreType: number;
    showHelpText: boolean;
    startingEquipmentType: number;
  };
  creatures: any[];
  currencies: {
    cp: number;
    ep: number;
    gp: number;
    pp: number;
    sp: number;
  };
  currentXp: number;
  customActions: any[];
  customDefenseAdjustments: any[];
  customItems: any[];
  customProficiencies: any[];
  customSenses: any[];
  customSpeeds: any[];
  deathSaves: {
    failCount: any;
    isStabilized: boolean;
    successCount: any;
  };
  defaultBackdrop: {
    backdropAvatarUrl: string;
    smallBackdropAvatarUrl: string;
    largeBackdropAvatarUrl: string;
    thumbnailBackdropAvatarUrl: string;
  };
  eyes: string;
  faith: any;
  feats: any[];
  frameAvatarId: any;
  frameAvatarUrl: any;
  gender: string;
  hair: string;
  height: string;
  id: number;
  inspiration: boolean;
  inventory: any[];
  largeBackdropAvatarId: any;
  largeBackdropAvatarUrl: any;
  lifestyle: any;
  lifestyleId: number;
  modifiers: any;
  name: string;
  notes: any;
  optionalClassFeatures: any[];
  optionalOrigins: any[];
  options: any;
  overrideHitPoints: any;
  overrideStats: any[];
  pactMagic: any[];
  preferences: any;
  race: any;
  raceDefinitionId: any;
  raceDefinitionTypeId: any;
  readonlyUrl: string;
  removedHitPoints: number;
  skin: string;
  smallBackdropAvatarId: any;
  smallBackdropAvatarUrl: any;
  socialName: any;
  spellDefenses: any;
  spellSlots: any[];
  spells: any;
  stats: any[];
  temporaryHitPoints: number;
  themeColor: any;
  themeColorId: any;
  thumbnailBackdropAvatarId: any;
  thumbnailBackdropAvatarUrl: any;
  traits: {
    appearance: any;
    bonds: any;
    flaws: string;
    ideals: string;
    personalityTraits: string;
  };
  weight: number;
}
