import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type FieldValues, type DefaultValues } from 'react-hook-form'
import type { z } from 'zod'

export const useAuthForm = <T extends FieldValues>(schema: z.ZodSchema<T>, defaultValues: DefaultValues<T>) => {
   return useForm<T>({
      resolver: zodResolver(schema) as any,
      defaultValues
   })
}
