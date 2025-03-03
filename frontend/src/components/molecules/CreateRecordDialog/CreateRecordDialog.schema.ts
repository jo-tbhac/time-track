import { z } from 'zod'

export const formSchema = z.object({
  date: z.instanceof(Date),
  jobId: z.coerce.number().min(1, '名称を選択してください。'),
  startedAt: z.string().min(1, '開始時間を入力してください。'),
  endedAt: z.string(),
  workTime: z.coerce.number(),
  note: z.string()
})

export type FormSchema = z.infer<typeof formSchema>
