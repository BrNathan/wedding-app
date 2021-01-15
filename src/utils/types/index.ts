
export interface ChildGuest {
  id?: string;
  firstName: string;
  lastName: string;
  age?: number;
}
export interface OtherGuest {
  id?: string;
  firstName: string;
  lastName: string;
}
export interface SpouseGuest {
  id?: string;
  firstName: string;
  lastName: string;
}
export interface SelfUserGuest {
  id?: string;
  firstName: string;
  lastName: string;
}

export interface UserGuest {
  id?: number;
  firstName: string;
  lastName: string;
  isSpouse: boolean | null;
  isOther: boolean | null;
  isUser: boolean | null;
  isChildren: boolean | null;
  age?: number | null;
  userId: number;
}

export interface UserInvitation {
  id: number;
  userId: number;
  answer: boolean | null;
  invitationId: number;
  invitation: Invitation;
}

export interface Invitation {
  id: number;
  code: string;
  label: string;
}

export interface UserInfo {
  id: number;
  firstName: string;
  lastName: string;
}

export interface AddressInformation {
  placeNumber?: number;
  placeNumberAdditionalInformation?: string;
  streetName: string;
  postalCode: number;
  city: string;
}
