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

export const {{ inputs.name | pascal }}: FC = () => {
  return <div>{{ inputs.name | pascal }} component</div>
}

```
