import { z } from 'zod'

// Base validation rules
const emailValidation = z.string().email('Email không hợp lệ').min(1, 'Email là bắt buộc')
const passwordValidation = z
   .string()
   .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
   .min(1, 'Mật khẩu là bắt buộc')
const fullNameValidation = z
   .string()
   .min(2, 'Họ tên phải có ít nhất 2 ký tự')
   .min(1, 'Họ tên là bắt buộc')
const phoneValidation = z
   .string()
   .min(10, 'Số điện thoại không hợp lệ')
   .min(1, 'Số điện thoại là bắt buộc')

// Login Schema
export const loginSchema = z.object({
   email: emailValidation,
   password: passwordValidation
})

// Register Schema
export const registerSchema = z
   .object({
      fullName: fullNameValidation,
      email: emailValidation,
      password: passwordValidation,
      repassword: z.string().min(1, 'Xác nhận mật khẩu là bắt buộc')
   })
   .refine((data) => data.password === data.repassword, {
      message: 'Mật khẩu xác nhận không khớp',
      path: ['repassword']
   })

// Recruit Register Schema
export const recruitRegisterSchema = z
   .object({
      // Account info
      fullName: fullNameValidation,
      email: emailValidation,
      password: passwordValidation,
      repassword: z.string().min(1, 'Xác nhận mật khẩu là bắt buộc'),

      // Recruiter info
      recruiterFullName: fullNameValidation,
      gender: z.enum(['male', 'female']).refine((val) => val !== undefined, {
         message: 'Vui lòng chọn giới tính'
      }),
      phone: phoneValidation,
      company: z.string().min(1, 'Tên công ty là bắt buộc')
   })
   .refine((data) => data.password === data.repassword, {
      message: 'Mật khẩu xác nhận không khớp',
      path: ['repassword']
   })

// Types
export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>
export type RecruitRegisterFormData = z.infer<typeof recruitRegisterSchema>
