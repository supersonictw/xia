export interface Contact {
  mid: string;
  displayName: string;
  pictureStatus?: string | null;
  statusMessage?: string | null;
}

export interface Group {
  id: string;
  name: string;
  pictureStatus?: string | null;
  members: Contact[];
}

export interface Message {
  id: string;
  target: string;
  from_: string;
  to: string;
  toType: number;
  text?: string | null;
  contentType: number;
  createdTime: number | string | { toNumber?: () => number };
  contentMetadata?: Record<string, string>;
}

export interface ContactItem {
  id: string;
  mid?: string;
  groupId?: string;
  displayName: string;
  statusMessage?: string;
  pictureStatus?: string | null;
}

export interface PreviewItem {
  id: string;
  target: string;
  time: number;
  displayName: string;
  pictureStatus?: string | null;
  lastMessage: string;
}
