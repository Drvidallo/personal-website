import { getEnvValue } from '../../helpers/environment'
import { isEmpty } from '../../helpers/utilities'
import en from './en'
import es from './es'

const language: string = !isEmpty(getEnvValue('LOCALE')) ? getEnvValue('LOCALE') : 'en'

export default (localesKey: string, values: any = {}): string => {
  let localeEntries: any = {}
  switch (language.trim().toLowerCase()) {
    case 'es':
      localeEntries = es
      break
    case 'en':
      localeEntries = en
      break
    default:
      localeEntries = en
      break
  }

  if (!(localesKey in localeEntries)) {
    throw new Error(`Lang item '${localesKey}' not found in '${language}'.`)
  }
  let messageFormatted = localeEntries[localesKey]
  for (const key in values) {
    messageFormatted = messageFormatted.replace(`{${key}}`, values[key])
  }
  return messageFormatted
}
