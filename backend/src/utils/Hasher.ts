import * as bcrypt from 'bcrypt';

class Hasher {
  private readonly saltRounds: number;

  constructor() {
    this.saltRounds = 10;
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}

export default new Hasher();
