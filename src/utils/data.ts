import type { JobType, MajorType } from '@/types/job.type'

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
