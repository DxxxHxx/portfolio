import { ChangeEvent, Dispatch, SetStateAction } from "react";

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
  readonly id: number;
  readonly name: string;
  readonly value: number;
}

export type InputElement = HTMLInputElement | HTMLTextAreaElement;

export interface IUseInput {
  readonly value: string;
  onChange: (e: React.ChangeEvent<InputElement>) => void;
  resetValue: () => void;
}

export interface IProjectList {
  readonly id: number;
  readonly title: string;
  readonly previewImg: {
    readonly png: string;
    readonly webp: string;
  };
  readonly desc: string;
  readonly period: string;
  readonly tech: string[];
  readonly Contribution: number;
  readonly projectType: string;
  readonly links: {
    readonly github: string | undefined;
    readonly deploy: string | undefined;
  };
}

export type ScrollDirectionType = "down" | "up" | null;

export type InputChangeEventType = ChangeEvent<HTMLInputElement>;

export interface IConactInput {
  labelText: string;
  id: string;
  type: "text" | "email";
  value: string;
  name: string;
  onChange: (e: InputChangeEventType) => void;
}

export interface IMainSkillList {
  id: number;
  name: string;
  desc: string[];
}

export type OpenedIndexType = null | number;

export interface IAccordionProps extends IMainSkillList {
  openedIndex: OpenedIndexType;
  setOpenedIndex: Dispatch<SetStateAction<OpenedIndexType>>;
}

export interface IIconList {
  id: number;
  logo: string;
}
