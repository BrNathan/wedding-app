import { IsNullOrUndefined, IsNullOrWhiteSpace } from '@/utils/extensions';
import { UserGuest } from '@/utils/types';

class ValidatorService {
  /**
   * validateGuest
   */
  public validateGuest(userGuest: UserGuest): boolean {
    let valid = true;

    if ((userGuest.isChildren && userGuest.isOther) ||
    (userGuest.isChildren && userGuest.isSpouse) ||
    (userGuest.isChildren && userGuest.isUser) ||
    (userGuest.isSpouse && userGuest.isUser) ||
    (userGuest.isSpouse && userGuest.isOther) ||
    (userGuest.isUser && userGuest.isOther)
    ) {
      valid = false;
    }

    if (IsNullOrWhiteSpace(userGuest.firstName) || IsNullOrWhiteSpace(userGuest.lastName)) {
      valid = false;
    }

    if (userGuest.isChildren && userGuest.age === null) {
      valid = false;
    }

    if ((userGuest.isOther || userGuest.isUser || userGuest.isSpouse) && !IsNullOrUndefined(userGuest.age)) {
      valid = false;
    }

    return valid;
  }

  /**
   * validateGuestList
   */
  public validateGuestList(userGuests: UserGuest[]): boolean {
    let valid = true;

    if (userGuests.some(g => !this.validateGuest(g))) {
      valid = false;
    }

    const numberOfIsUser: boolean[] = [];
    const numberOfIsSpouse: boolean[] = [];
    userGuests.forEach((value) => {
      if (value.isUser) {
        numberOfIsUser.push(true);
      }

      if (value.isSpouse) {
        numberOfIsSpouse.push(true);
      }
    });

    if (numberOfIsSpouse.length > 1) {
      valid = false;
    }
    if (numberOfIsUser.length > 1) {
      valid = false;
    }

    return valid;
  }
}

export default new ValidatorService();
