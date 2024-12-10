import type { ComponentProps, FC } from 'react'

import styles from './FormLabel.css'

interface FormLabel extends ComponentProps<'label'> {}

export const FormLabel: FC<FormLabel> = (props) => {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl:
    <label className={styles.label} {...props} />
  )
}
