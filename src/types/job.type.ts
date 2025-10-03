export type JobType = {
   id: number
   title: string
   company: string
   avatar: string
   location: string
   salary: string
}

export type MajorType = {
   id: number
   name: string
}

export type JobDetailType = {
   jobInfo: JobBasicInfoType
   companyInfo: CompanyInfoType
   jobDescription: JobDescriptionType
   jobCommonInfo: JobCommonInfoType
}

export type JobBasicInfoType = {
   id: number
   title: string
   salary: string
   location: string
   experience: string | number
   deadline: Date
}

export type CompanyInfoType = {
   id: number
   name: string
   avatar: string
   scale: string
   industry: string
   address: string
}

export type JobDescriptionType = {
   description: string
   requirement: string
   benefit: string
   address: string
   workingTime: string
}

export type JobCommonInfoType = {
   level: string
   education: string
   numberOfRecruit: number
   employmentType: string
}
