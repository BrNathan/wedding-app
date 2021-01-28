export interface DefaultGuest {
  id?: string;
  firstName: string;
  lastName: string;
}

export interface ChildGuest extends DefaultGuest{
  age?: number;
}
export type OtherGuest = DefaultGuest
export type SpouseGuest = DefaultGuest
export type SelfUserGuest = DefaultGuest

export interface DefaultGuestUI extends DefaultGuest {
  stateFirstName: boolean | null;
  feedbackFirstName: string;
  stateLastName: boolean | null;
  feedbackLastName: string;
}
export interface ChildGuestUI extends DefaultGuestUI, ChildGuest {
  stateAge: boolean | null;
  feedbackAge: string;
}
export type OtherGuestUI = DefaultGuestUI
export type SpouseGuestUI = DefaultGuestUI
export type SelfUserGuestUI = DefaultGuestUI

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

export interface UserInvitationUI extends UserInvitation {
  state: boolean | null;
  feedback: string;
  titleHtml: string;
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
