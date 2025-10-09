import EmailFormField from '@/components/auth/EmailFormField'
import FullNameFormField from '@/components/auth/FullNameFormField'
import PhoneFormField from '@/components/auth/PhoneFormField'
import Button from '@/components/button/Button'
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogTrigger
} from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { FileIcon, UploadIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type CVOption = {
   id: string
   name: string
}

type ApplyJobDialogProps = {
   jobTitle: string
   children: React.ReactNode
}

const applyJobSchema = z
   .object({
      uploadMethod: z.enum(['list', 'upload']),
      selectedCV: z.string().optional(),
      fullName: z.string().optional(),
      email: z.string().optional(),
      phone: z.string().optional(),
      coverLetter: z.string().max(500, 'Thư giới thiệu không được vượt quá 500 ký tự')
   })
   .refine(
      (data) => {
         if (data.uploadMethod === 'upload') {
            return (
               data.fullName &&
               data.fullName.trim() !== '' &&
               data.email &&
               data.email.trim() !== '' &&
               data.phone &&
               data.phone.trim() !== ''
            )
         }
         return data.selectedCV && data.selectedCV.trim() !== ''
      },
      {
         message: 'Vui lòng nhập đầy đủ thông tin bắt buộc',
         path: ['uploadMethod']
      }
   )

type ApplyJobFormData = z.infer<typeof applyJobSchema>

export default function ApplyJobDialog({ jobTitle, children }: ApplyJobDialogProps) {
   const [open, setOpen] = useState(false)

   const form = useForm<ApplyJobFormData>({
      resolver: zodResolver(applyJobSchema),
      defaultValues: {
         uploadMethod: 'list',
         selectedCV: 'cv-1',
         fullName: '',
         email: '',
         phone: '',
         coverLetter: ''
      }
   })

   const uploadMethod = form.watch('uploadMethod')
   const coverLetter = form.watch('coverLetter')

   const cvList: CVOption[] = [
      { id: 'cv-1', name: 'CV_NguyenAnhKha' },
      { id: 'cv-2', name: 'dsd' },
      { id: 'cv-3', name: 'CV IT' }
   ]

   const onSubmit = (data: ApplyJobFormData) => {
      console.log('Application submitted:', data)
      setOpen(false)
      form.reset()
   }

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>{children}</DialogTrigger>
         <DialogContent className='max-h-[95vh] min-w-[700px] overflow-y-auto'>
            <DialogHeader>
               <DialogTitle className='text-xl'>
                  Ứng tuyển <span className='text-primary-green'>{jobTitle}</span>
               </DialogTitle>
            </DialogHeader>

            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-6 py-4'>
                  {/* Chọn CV Section */}
                  <div className='flex flex-col gap-y-3'>
                     <div className='flex items-center gap-x-2 text-base font-semibold'>
                        <FileIcon size={20} className='text-primary-green' />
                        <span>Chọn CV để ứng tuyển</span>
                     </div>

                     <div className='border-primary-green flex flex-col gap-y-2 rounded-lg border-2 bg-green-50/30 p-4'>
                        <FormField
                           control={form.control}
                           name='uploadMethod'
                           render={({ field }) => (
                              <FormItem>
                                 <FormControl>
                                    <RadioGroup
                                       onValueChange={field.onChange}
                                       value={field.value}
                                       className='flex flex-col gap-y-4'
                                    >
                                       {/* CV Online Option */}
                                       <div className='flex items-start gap-x-3'>
                                          <RadioGroupItem
                                             value='list'
                                             id='cv-online'
                                             className='border-primary-green text-primary-green mt-1'
                                          />
                                          <div className='flex-1'>
                                             <label
                                                htmlFor='cv-online'
                                                className='text-primary-green flex cursor-pointer items-center gap-x-2 font-semibold'
                                             >
                                                <FileIcon size={16} />
                                                Chọn CV khác trong thư viện CV của tôi
                                             </label>
                                             <div className='mt-2 text-sm font-semibold'>
                                                CV Online
                                             </div>

                                             {uploadMethod === 'list' && (
                                                <FormField
                                                   control={form.control}
                                                   name='selectedCV'
                                                   render={({ field }) => (
                                                      <FormItem className='mt-3'>
                                                         <FormControl>
                                                            <RadioGroup
                                                               value={field.value}
                                                               onValueChange={field.onChange}
                                                               className='flex flex-col gap-y-2'
                                                            >
                                                               {cvList.map((cv) => (
                                                                  <div
                                                                     key={cv.id}
                                                                     className='hover:border-primary-green flex items-center gap-x-3 rounded border border-gray-200 bg-white px-4 py-2.5'
                                                                  >
                                                                     <RadioGroupItem
                                                                        value={cv.id}
                                                                        id={cv.id}
                                                                        className='text-primary-green border-gray-300'
                                                                     />
                                                                     <Label
                                                                        htmlFor={cv.id}
                                                                        className='flex-1 cursor-pointer text-sm font-normal'
                                                                     >
                                                                        {cv.name}
                                                                     </Label>
                                                                  </div>
                                                               ))}
                                                            </RadioGroup>
                                                         </FormControl>
                                                         <FormMessage />
                                                      </FormItem>
                                                   )}
                                                />
                                             )}
                                          </div>
                                       </div>

                                       {/* Upload CV Option */}
                                       <div className='flex items-start gap-x-3'>
                                          <RadioGroupItem
                                             value='upload'
                                             id='cv-upload'
                                             className='border-primary-green text-primary-green mt-1'
                                          />
                                          <div className='flex-1'>
                                             <label
                                                htmlFor='cv-upload'
                                                className='flex cursor-pointer items-center gap-x-2 font-semibold text-gray-600'
                                             >
                                                <UploadIcon size={16} />
                                                Tải lên CV từ máy tính, chọn hoặc kéo thả
                                             </label>
                                             <div className='mt-1 text-xs text-gray-500'>
                                                Hỗ trợ định dạng .doc, .docx, pdf có kích thước dưới
                                                5MB
                                             </div>

                                             {uploadMethod === 'upload' && (
                                                <div className='mt-3 flex flex-col gap-y-3'>
                                                   <Button
                                                      type='button'
                                                      variant='outline'
                                                      className='border-primary-green text-primary-green w-full hover:bg-green-50'
                                                   >
                                                      <UploadIcon size={16} />
                                                      Chọn CV
                                                   </Button>

                                                   {/* Required fields section */}
                                                   <div className='rounded-lg border border-red-200 bg-red-50/30 p-4'>
                                                      <div className='mb-3 flex items-center gap-x-2 text-sm font-medium text-red-600'>
                                                         <span>(*)</span>
                                                         <span>
                                                            Vui lòng nhập đầy đủ thông tin chi tiết:
                                                         </span>
                                                      </div>

                                                      <div className='flex flex-col gap-y-3'>
                                                         <FullNameFormField
                                                            control={form.control}
                                                            name='fullName'
                                                            label='Họ và tên *'
                                                            placeholder='Họ tên hiển thị với NTD'
                                                         />

                                                         <div className='grid grid-cols-2 gap-x-3'>
                                                            <EmailFormField
                                                               control={form.control}
                                                               name='email'
                                                               label='Email *'
                                                               placeholder='Email hiển thị với NTD'
                                                            />
                                                            <PhoneFormField
                                                               control={form.control}
                                                               name='phone'
                                                               label='Số điện thoại *'
                                                               placeholder='Số điện thoại hiển thị với NTD'
                                                            />
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             )}
                                          </div>
                                       </div>
                                    </RadioGroup>
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>
                  </div>

                  {/* Cover Letter Section */}
                  <div className='flex flex-col gap-y-3'>
                     <div className='flex items-center gap-x-2 text-base font-semibold'>
                        <span className='text-primary-green'>✉</span>
                        <span>Thư giới thiệu:</span>
                     </div>
                     <div className='text-sm text-gray-600'>
                        Một thư giới thiệu ngắn gọn, chỉn chu sẽ giúp bạn trở nên chuyên nghiệp và
                        gây ấn tượng hơn với nhà tuyển dụng.
                     </div>
                     <FormField
                        control={form.control}
                        name='coverLetter'
                        render={({ field }) => (
                           <FormItem>
                              <FormControl>
                                 <Textarea
                                    {...field}
                                    placeholder='Viết giới thiệu ngắn gọn về bản thân (điểm mạnh, điểm yếu) và nêu rõ mong muốn, lý do bạn muốn ứng tuyển cho vị trí này.'
                                    className='focus:border-primary-green focus:ring-primary-green min-h-[120px] resize-none rounded border-gray-300'
                                    maxLength={500}
                                 />
                              </FormControl>
                              <div className='flex items-center gap-x-2 text-xs text-gray-500'>
                                 <span className='text-primary-green'>✓</span>
                                 <span>{coverLetter?.length || 0}/500 ký tự</span>
                              </div>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </div>

                  {/* Action Buttons */}
                  <div className='flex items-center gap-x-3 pt-2'>
                     <Button
                        type='button'
                        variant='ghost'
                        className='flex-1 border border-gray-300 hover:bg-gray-100'
                        onClick={() => {
                           setOpen(false)
                           form.reset()
                        }}
                     >
                        Hủy
                     </Button>
                     <Button
                        type='submit'
                        variant='primary'
                        className='bg-primary-green hover:bg-primary-green/90 flex-1'
                     >
                        Nộp hồ sơ ứng tuyển
                     </Button>
                  </div>
               </form>
            </Form>
         </DialogContent>
      </Dialog>
   )
}
