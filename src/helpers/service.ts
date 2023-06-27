import fs from 'fs'
import path from 'path'

import lang from '@api/lang'

import { getEnvValue } from './environment'


const basePath = getEnvValue('BASE_PATH')

export const getServiceByVersion = async (serviceName: string, version: any = '0'): Promise<any> => {
  const versionPathToCheck = path.join(getEnvValue('BASE_PATH'), 'api', 'services', `v${version as string}`)
  if (!fs.existsSync(versionPathToCheck)) {
    console.log("Error")
  }
  let serviceCollection: any = {}
  serviceCollection = await import(path.join(basePath, 'api', 'services', `v${version as string}`))
  if (!(serviceName in serviceCollection)) {
    console.log("Error")
  }
  return new serviceCollection[serviceName]()
}
