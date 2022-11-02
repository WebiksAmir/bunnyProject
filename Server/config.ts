import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: __dirname+'/.env' });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these variables or not setup a .env file at all

interface ENV {
  NODE_ENV: string | undefined;
  PORT: number | undefined;
  PG_HOST: string | undefined;
  PG_USER: string | undefined;
  PG_PORT: number | undefined;
  PG_PW: string | undefined;
  PG_DATABASE: string | undefined;
}

interface Config {
  NODE_ENV: string;
  PORT: number;
  PG_HOST: string | undefined;
  PG_USER: string | undefined;
  PG_PORT: number | undefined;
  PG_PW: string | undefined;
  PG_DATABASE: string | undefined;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    PG_HOST: process.env.PG_HOST,
    PG_USER: process.env.PG_USER,
    PG_PORT: process.env.PORT ? Number(process.env.PG_PORT) : undefined,
    PG_PW: process.env.PG_PW,
    PG_DATABASE: process.env.PG_DATABASE,
  };
};

// Throwing an Error if any field was undefined we don't
// want our app to run if it can't connect to DB and ensure
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type
// definition.

const getSanitizedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;
