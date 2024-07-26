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
