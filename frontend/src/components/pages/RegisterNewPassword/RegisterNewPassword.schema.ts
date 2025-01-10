import { z } from 'zod'

export const formSchema = z
  .object({
    password: z
      .string()
      .min(8, 'パスワードは8文字以上で入力してください。')
      .regex(/[0-9]/, '一文字以上の数字が含まれている必要があります。')
      .regex(/[a-z]/, '一文字以上の小文字が含まれている必要があります。')
      .regex(/[A-Z]/, '一文字以上の大文字が含まれている必要があります。')
      .regex(
        /[\^$*.\[\]{}()?\\\-!"@#%&/,><':;|_~`+=]/,
        '一文字以上の特殊文字が含まれている必要があります。'
      ),
    passwordConfirmation: z.string()
  })
  .refine(({ password, passwordConfirmation }) => password === passwordConfirmation, {
    message: '新しいパスワードと新しいパスワード（確認用）が一致しません。',
    path: ['passwordConfirmation']
  })

export type FormSchema = z.infer<typeof formSchema>
