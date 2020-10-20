class PasswordHasherService {
  private publicKey = 'klklklkklklsfko23Rrrjr';

  /**
   * hash
   */
  public hash(token: string): string {
    // TODO Do the hasher method with public/private key
    return token;
  }
}

export default new PasswordHasherService();
