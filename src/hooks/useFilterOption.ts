import { useState } from 'react'

type FilterOptionProps<T> = {
   data: T[]
}

export function useFilterOption<T>({ data }: FilterOptionProps<T>) {
   const [selectedOption, setSelectedOption] = useState<T | null>(null)

   return { selectedOption, setSelectedOption }
}
