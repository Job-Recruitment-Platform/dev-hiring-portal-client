import type { JobType, MajorType } from '@/types/job.type'
import type { ProvinceType } from '@/types/province.type'

const mockJob: JobType = {
   id: 1,
   title: 'Trưởng Phòng Kinh Doanh Mảng Golf [Hà Nội] - Thu Nhập Cạnh Tranh, Tối Thiểu 3 Năm Kinh Nghiệm',
   company: 'Công ty CP thể thao Phương Đông',
   location: 'Hà Nội',
   avatar:
      'https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/cong-ty-cp-the-thao-phuong-dong-6d1a2e3598368a704bc59584d264d033-669485f23a2cf.jpg',
   salary: '15 - 20 triệu'
}

export const mockJobList: JobType[] = Array(9)
   .fill(mockJob)
   .map((job, index) => ({ ...job, id: index + 1 }))

export const mockMajorList: MajorType[] = Array(25)
   .fill(null)
   .map((_, index) => ({
      id: index + 1,
      name: [
         'Công nghệ thông tin',
         'Kinh tế',
         'Tài chính - Ngân hàng',
         'Marketing',
         'Xây dựng',
         'Lao động phổ thông',
         'Y tế',
         'Giáo dục',
         'Du lịch',
         'Logistics',
         'Nhân sự',
         'Bán lẻ',
         'Sản xuất',
         'Bất động sản',
         'Luật',
         'Kế toán',
         'Thiết kế',
         'Truyền thông',
         'Nông nghiệp',
         'Dịch vụ khách hàng',
         'Điện tử',
         'Cơ khí',
         'Hóa học',
         'Môi trường',
         'An ninh'
      ][index]
   }))

export const mockProvinces: ProvinceType[] = Array(20)
   .fill(null)
   .map((_, index) => ({
      label: [
         'Hồ Chí Minh',
         'Hà Nội',
         'Đà Nẵng',
         'Cần Thơ',
         'Nha Trang',
         'Hải Phòng',
         'Biên Hòa',
         'Bắc Ninh',
         'Thái Nguyên',
         'Nam Định',
         'Vũng Tàu',
         'Huế',
         'Quy Nhon',
         'Buôn Ma Thuột',
         'Phan Thiết',
         'Vinh',
         'Hạ Long',
         'Cà Mau',
         'Kon Tum',
         'Sóc Trăng'
      ][index],
      value: [
         'hcm',
         'hn',
         'dn',
         'ct',
         'nt',
         'hp',
         'bh',
         'bn',
         'tn',
         'nd',
         'vt',
         'hue',
         'qn',
         'bmt',
         'pt',
         'vinh',
         'hl',
         'cm',
         'kt',
         'st'
      ][index]
   }))

export const mockExperienceOptions = [
   { label: 'Tất cả', value: 'all' },
   { label: 'Dưới 1 Năm', value: '-1' },
   { label: '1 Năm', value: '1' },
   { label: '2 Năm', value: '2' },
   { label: '3 Năm', value: '3' },
   { label: '4 Năm', value: '4' },
   { label: '5 Năm', value: '5' },
   { label: 'Trên 5 Năm', value: '6' },
   { label: 'Không yêu cầu', value: 'none' }
]

export const mockJobDetail = {
   jobInfo: {
      id: 101,
      title: 'Junior Java Backend Developer',
      salary: '15 - 25 triệu',
      location: 'Hà Nội',
      experience: '1 Năm',
      deadline: '2025-10-31T23:59:59.000Z'
   },
   companyInfo: {
      id: 55,
      name: 'TechnoViet Solutions',
      avatar: 'https://example.com/company-logo.png',
      scale: '201-500',
      industry: 'Information Technology',
      address: 'Tầng 12, Tòa Keangnam Landmark, Nam Từ Liêm, Hà Nội'
   },
   jobDescription: {
      description:
         'Phát triển và duy trì hệ thống backend cho các ứng dụng thương mại điện tử quy mô lớn. Tham gia review code, tối ưu hiệu năng hệ thống.',
      requirement:
         'Có kiến thức cơ bản về Java, Spring Boot, SQL. Hiểu biết về REST API. Ưu tiên có kinh nghiệm với Docker và Kafka.',
      benefit:
         'Mức lương cạnh tranh, thưởng theo dự án. Bảo hiểm full lương. Cơ hội đào tạo và thăng tiến.',
      address: 'Làm việc tại trụ sở công ty, Hà Nội',
      workingTime: 'Thứ 2 - Thứ 6, 9h00 - 18h00'
   }
}
