type Config = {
  port: number;
  database: {
    host: string;
    port: number;
  };
};

export default (): Config => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
  database: {
    host: process.env.DATABASE_HOST ?? 'localhost',
    port: parseInt(process.env.DATABASE_PORT ?? '5432', 10),
  },
});
