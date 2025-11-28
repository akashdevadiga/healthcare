class UserRepository {
  constructor() {
    this.users = [
      {
        id: 1,
        email: 'demo@example.com',
        name: 'Demo User',
        createdAt: new Date('2024-01-01T00:00:00Z'),
      },
    ];
    this.nextId = this.users.length + 1;
  }

  async findAll() {
    return [...this.users].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
  }

  async findByEmail(email) {
    return this.users.find((user) => user.email === email) || null;
  }

  async create(userData) {
    const newUser = {
      id: this.nextId++,
      ...userData,
      createdAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }
}

export default UserRepository;
