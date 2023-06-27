import { Router, Response } from 'express'

import { HTTP_STATUS_CODES } from '@api/constants'

import { getEnvValue, getServiceByVersion } from '@api/helpers'

const router = Router()

router.post('/sendEmail', async (req: any, res: Response): Promise<any> => {
  const { version } = req.query
  const { email, fullName, message } = req.body

  try {
    const serviceName = 'sendEmailService'
    const sendEmailService = await getServiceByVersion(serviceName, version as string)
    const serviceResponse = await sendEmailService.sendEmail(email, fullName, message)

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

export const EmailController = router
