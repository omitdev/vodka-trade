class Config {
  PORT: string;

  constructor() {
    this.PORT = this.requireEnv("NEXT_PORT");
  }

  private requireEnv(key: string): string {
    const value = process.env[key];

    if (!value || value === "") {
      throw new Error(`❌ Missing required env variable: ${key}`);
    }
    return value;
  }
}

export const config = new Config();
