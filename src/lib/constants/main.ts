export const SYSTEM_DEFAULTS = {
  db: {
    tablePrefix: '',
    poolCountMin: 1,
    poolCountMax: 20,
    queryExecTimeMax: 3000
  },
  logs: {
  },
  app: {
    name: ''
  }
}

export const DATE_FORMAT_ACCEPTED = 'YYYY-MM-DD'
export const DATE_TIME_FORMAT_ACCEPTED = 'YYYY-MM-DD HH:mm:ss'
export const TIME_FORMAT_ACCEPTED = 'HH:mm:ss'

export const REQUEST_DATA_TYPES = {
  date: 'DATE',
  enum: 'ENUM',
  string: 'STRING',
  number: 'NUMBER',
  boolean: 'BOOLEAN',
  decimal: 'DECIMAL',
  list: 'LIST',
  objectArray: 'OBJECT_ARRAY',
  object: 'OBJECT'
}

export const HTTP_STATUS_CODES = {
  SUCCESS: 200,
  CLIENT_ERROR: 400,
  SERVER_ERROR: 500
}


export const SERVICE_VERSIONS = {
  one: '1'
}


export const DEBUG_ENVS = {
  development: 'DEVELOPMENT',
  debugLocal: 'DEBUG_LOCAL',
  debugDev: 'DEBUG_DEV'
}

export const ENVIRONMENTS = {
  test: 'TEST',
  local: 'LOCAL',
  localDocker: 'LOCAL_DOCKER',
  development: 'DEVELOPMENT',
  debugLocal: 'DEBUG_LOCAL',
  debugDev: 'DEBUG_DEV',
  dev: 'DEV',
  sit: 'SIT',
  uat: 'UAT',
  prod: 'PROD'
}


