export interface IMenuList {
  readonly id: number;
  readonly category: string;
}

export interface IInfoList {
  readonly id: number;
  readonly emoji: string;
  readonly text: string;
}

export interface ILinkList {
  readonly id: number;
  readonly href: string;
  readonly src: string;
  readonly alt: string;
  readonly text: string;
}

export interface ISkillList {
  id: number;
  name: string;
  value: number;
}

export type InputElement = HTMLInputElement | HTMLTextAreaElement;

export interface IUseInput {
  value: string;
  onChange: (e: React.ChangeEvent<InputElement>) => void;
  resetValue: () => void;
}
