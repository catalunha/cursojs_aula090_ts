export class Database {
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}
  private static _instance: Database | null = null;
  connect(): void {
    console.log(`Connected ${this.host}`);
  }
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database._instance) {
      console.log('Retornando instancia ja criada...');
      return Database._instance;
    } else {
      console.log('Criando instancia...');
    }
    Database._instance = new Database(host, user, password);
    return Database._instance;
  }
}
const db = Database.getDatabase('localhost', 'root', '123456');

db.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');

db2.connect();
if (db === db2) console.log('instancia unica');
