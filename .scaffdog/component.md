---
name: 'component'
root: './src/components'
output: '*'
ignore: []
questions:
  name: 'Please enter a component name.'
---

# `{{ inputs.name | pascal }}/index.ts`

```markdown
export * from './{{ inputs.name | pascal }}'

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```markdown
import type { FC } from 'react'

import styles from './{{ inputs.name | pascal }}.css'

export const {{ inputs.name | pascal }}: FC = () => {
  return <div className={styles.container}>{{ inputs.name | pascal }} component</div>
}

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.css.ts`

```markdown
import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({})

export default { container }

```
