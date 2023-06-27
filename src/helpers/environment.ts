import dotenv from 'dotenv'
import path from 'path'
import { ENVIRONMENTS } from '@api/constants/main'

if (process.env.NODE_ENV !== ENVIRONMENTS.test) {
  dotenv.config({
    path: path.join(__dirname, '../..', '.env')
  })
} else {
  dotenv.config({
    path: path.join(__dirname, '../..', '.env.test')
  })
}

process.env.BASE_PATH = path.join(__dirname, '..')
process.env.ROOT_PATH = path.join(__dirname, '../..')

const USE_DB_CONNECTION = process.env.USE_DB_CONNECTION ?? '0'
const USE_PROXY = process.env.USE_PROXY ?? '0'
const APP_NAME = process.env.APP_NAME ?? 'NODE-API'
const PORT = (process.env.PORT ?? 3000) as number
const ENV = process.env.NODE_ENV ?? ENVIRONMENTS.development
const BASE_URL = process.env.BASE_URL ?? ''


// Setting the evironment values
process.env.APP_NAME = APP_NAME
process.env.PORT = (PORT as unknown) as string
process.env.NODE_ENV = ENV
process.env.ENV = ENV
process.env.BASE_URL = BASE_URL
process.env.USE_DB_CONNECTION = USE_DB_CONNECTION
process.env.USE_PROXY = USE_PROXY


export const setEnvValue = (envKey: string, envValue: any): boolean => {
  const envValueToSet = envValue as string
  process.env[envKey] = envValueToSet
  return ((envKey in process.env) && (process.env[envKey] === envValueToSet))
}

export const getEnvValue = (key: string): any => {
  return process.env[key] ?? ''
}

export const isOnTestEnv = (): boolean => {
  return ((process.env.NODE_ENV as string).toUpperCase() === ENVIRONMENTS.test)
}
