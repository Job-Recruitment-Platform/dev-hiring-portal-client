import Button from '@/components/button/Button'

type AuthSubmitButtonProps = {
   children: React.ReactNode
   className?: string
}

export default function AuthSubmitButton({ children, className }: AuthSubmitButtonProps) {
   return (
      <Button variant='primary' className={`w-full !rounded !py-2.5 ${className || ''}`}>
         {children}
      </Button>
   )
}
