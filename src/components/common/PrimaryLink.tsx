import { Link, type LinkProps } from 'react-router-dom'

type PrimaryLinkProps = LinkProps & {
   children: React.ReactNode
   className?: string
}

export default function PrimaryLink({ children, className, ...props }: PrimaryLinkProps) {
   return (
      <Link className={`text-primary-green hover:underline ${className || ''}`} {...props}>
         {children}
      </Link>
   )
}
