import { Form } from '@/components/ui/form'
import type { FieldValues, UseFormReturn } from 'react-hook-form'

type AuthFormWrapperProps<TFieldValues extends FieldValues> = {
   form: UseFormReturn<TFieldValues>
   onSubmit: (data: TFieldValues) => void
   children: React.ReactNode
   className?: string
}

export default function AuthFormWrapper<TFieldValues extends FieldValues>({
   form,
   onSubmit,
   children,
   className
}: AuthFormWrapperProps<TFieldValues>) {
   return (
      <div className='w-full'>
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className={`flex w-full flex-col gap-y-4 ${className || ''}`}
            >
               {children}
            </form>
         </Form>
      </div>
   )
}
