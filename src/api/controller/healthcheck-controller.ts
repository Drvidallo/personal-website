import { Router, Response } from 'express'

import { HTTP_STATUS_CODES } from '@api/constants'

import { getEnvValue, getServiceByVersion } from '@api/helpers'

const router = Router()

router.get('/healthcheck', async (req: any, res: Response): Promise<any> => {
  const { version } = req.query
  try {
    const serviceName = 'HealthCheckService'
    const healthcheckService = await getServiceByVersion(serviceName, version as string)
    const serviceResponse = await healthcheckService.healthcheck()
    return res
      .status(HTTP_STATUS_CODES.SUCCESS)
      .json(serviceResponse)
  } catch (error) {
    console.log(error)
    return res
      .status(HTTP_STATUS_CODES.SERVER_ERROR)
      .json(error)
  }
})

export const HealthCheckController = router
