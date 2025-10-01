import { useCallback, useMemo, useState } from 'react'

export interface ClientPaginationOptions<T> {
   data: T[] // Page Data
   initialPage?: number // Starting page
   initialPageSize?: number // Default items per page
}

export interface ClientPaginationResult<T> {
   currentPage: number // Current page
   pageSize: number // Items / page
   totalPages: number // Total pages
   hasPrev: boolean
   hasNext: boolean

   pagedData: T[] // Data sliced by currentPage

   next: () => void
   prev: () => void
   goTo: (page: number) => void
   setPageSize: (size: number) => void
}

export function useClientPagination<T>({
   data,
   initialPage = 1,
   initialPageSize = 5
}: ClientPaginationOptions<T>): ClientPaginationResult<T> {
   const [page, setPage] = useState(initialPage)
   const [pageSize, setPageSizeState] = useState(initialPageSize)

   const totalPages = useMemo(() => {
      if (data.length === 0) return 0
      return Math.ceil(data.length / pageSize)
   }, [data.length, pageSize])

   const currentPage = Math.min(Math.max(1, page), totalPages || 1)

   const startIndex = (currentPage - 1) * pageSize
   const endIndex = startIndex + pageSize
   const pagedData = data.slice(startIndex, endIndex)

   const hasPrev = currentPage > 1
   const hasNext = currentPage < totalPages

   const next = useCallback(() => {
      if (hasNext) setPage((p) => p + 1)
   }, [hasNext])

   const prev = useCallback(() => {
      if (hasPrev) setPage((p) => p - 1)
   }, [hasPrev])

   const goTo = useCallback(
      (p: number) => {
         setPage(Math.max(1, Math.min(p, totalPages)))
      },
      [totalPages]
   )

   const setPageSize = useCallback((size: number) => {
      setPageSizeState(size > 0 ? size : 1)
      setPage(1) // Reset to first page on page size change
   }, [])

   return {
      currentPage,
      pageSize,
      totalPages,
      hasPrev,
      hasNext,
      pagedData,
      next,
      prev,
      goTo,
      setPageSize
   }
}
