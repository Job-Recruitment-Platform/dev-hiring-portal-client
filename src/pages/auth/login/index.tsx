import { FormInput } from '@/components/input/FormInput'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { MailIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function Login() {
   const form = useForm()

   return (
      <div className='w-full'>
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit((data) => console.log(data))}
               className='flex w-full flex-col gap-y-4'
            >
               <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <FormInput
                              placeholder='Enter your email'
                              type='email'
                              leftIcon={<MailIcon />}
                           />
                        </FormControl>
                     </FormItem>
                  )}
               />
            </form>
         </Form>
      </div>
   )
}
