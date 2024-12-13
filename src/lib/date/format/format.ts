import { format as dateFnsFormat } from 'date-fns'
import { ja } from 'date-fns/locale'

const format: typeof dateFnsFormat = (date, formatStr, options) => {
  return dateFnsFormat(date, formatStr, { locale: ja, ...options })
}

export default format
