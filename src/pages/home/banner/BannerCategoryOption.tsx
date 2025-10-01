type BannerCategoryOptionProps = {
   categoryOptions: number | null
}

export default function BannerCategoryOption({ categoryOptions }: BannerCategoryOptionProps) {
   return <div className='h-full w-full bg-white'>{categoryOptions}</div>
}
