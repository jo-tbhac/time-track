import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(1, '名称を入力してください。'),
  hourlyWage: z.coerce.number().int('整数で入力してください。')
})

export type FormSchema = z.infer<typeof formSchema>
