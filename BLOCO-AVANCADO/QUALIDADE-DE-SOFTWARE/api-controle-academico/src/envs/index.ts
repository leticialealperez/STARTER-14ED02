import 'dotenv/config';

export const envs = {
    PORTA: process.env.PORTA as string,
    DATABASE_URL: process.env.DATABASE_URL as string,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY as string,
    JWT_EXPIRE_IN: process.env.JWT_EXPIRE_IN as string,
    BCRYPT_SALT: process.env.BCRYPT_SALT as string
}