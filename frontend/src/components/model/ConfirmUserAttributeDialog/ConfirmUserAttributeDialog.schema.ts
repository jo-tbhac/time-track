import { z } from 'zod'

export const formSchema = z.object({
  code: z.string().min(1, '確認コードを入力してください。')
})

export type FormSchema = z.infer<typeof formSchema>
