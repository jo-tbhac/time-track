import type { FC, ReactNode } from 'react'

import { Typography } from '../Typography'

interface Props {
  children: ReactNode
}

export const FormErrorText: FC<Props> = (props) => {
  return <Typography color="danger" fontSize="textXS" {...props} />
}
