import 'reflect-metadata'
// import libraries / classes from npm
import * as path from 'path'
import express from 'express'
import * as bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import dayjs from 'dayjs'

// load base project code
import './paths' // do path alias registration by code

import {
  getEnvValue,
  isOnTestEnv,
} from '@api/helpers'

import {
  ENVIRONMENTS
} from '@api/constants'

import * as routeControllers from '@api/controllers'

const appName: string = getEnvValue('APP_NAME')
const port = getEnvValue('PORT')
const env: string = getEnvValue('NODE_ENV')
const baseurl: string = getEnvValue('BASE_URL')
const rootDir: string = getEnvValue('ROOT_PATH')
const server = express()

server.set('views', path.join(rootDir, 'views'))
server.set('view engine', 'ejs')

server.use(cors())
server.use(helmet({
  contentSecurityPolicy: false
}))
server.use(bodyParser.json())


// Register controllers
for (const controller in routeControllers) {
  server.use(baseurl, routeControllers[controller])
}



server.listen(port, async () => {
  const startMoment = dayjs()
  let dbConnection: any = {}
  if (+getEnvValue('USE_DB_CONNECTION') > 0) {
    if (env === ENVIRONMENTS.debugLocal) {
      await dbConnection.runMigrations({
        transaction: 'all'
      })
    }
  }
  if (!isOnTestEnv()) {
    console.log(`STARTED ON : ${startMoment.format('YYYY-MM-DD HH:mm:ss.SSS')}`)
    console.log(`APP NAME : ${appName.toUpperCase()}`)
    console.log(`PORT : ${port as string}`)
    console.log(`BASE URL : '${baseurl}'`)
  }
})

export default server
