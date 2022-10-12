import {
  FaFacebookSquare as Facebook,
  FaWhatsappSquare as WhatsApp,
  FaInstagramSquare as Instagram,
  FaTwitterSquare as Twitter,
} from 'react-icons/fa'

export const bloodStock = [
  { type: 'A', amount: 20 },
  { type: 'B', amount: 25 },
  { type: 'AB', amount: 18 },
  { type: 'O', amount: 22 },
]

export const socialMedia = [
  { media: 'Contact Person', icon: <WhatsApp size={24} /> },
  { media: 'Facebook', icon: <Facebook size={24} /> },
  { media: 'Instagram', icon: <Instagram size={24} /> },
  { media: 'Twitter', icon: <Twitter size={24} /> },
]

export const donorHistory = [
  { id: 1, date: '1 Januari 2021', status: 'selesai' },
  { id: 2, date: '3 Maret 2021', status: 'selesai' },
  { id: 3, date: '7 Juni 2021', status: 'selesai' },
  { id: 4, date: '10 September 2021', status: 'selesai' },
  { id: 5, date: '12 Januari 2022', status: 'selesai' },
  { id: 6, date: '20 April 2022', status: 'selesai' },
  { id: 7, date: '3 Maret 2022', status: 'selesai' },
  { id: 8, date: '7 Juni 2022', status: 'selesai' },
  { id: 9, date: '10 September 2022', status: 'menunggu' },
]

export const donorParticipant = [
  {
    id: 1,
    name: 'Haris Setianto',
    address: 'Jalan Pemuda Nomor 13, Tanjung Priuk',
    profession: 'Karyawan Swasta',
    age: 28,
    phone: '08***********',
    gender: 'Pria',
    bloodGroup: 'A',
  },
  {
    id: 2,
    name: 'Zulaikha',
    address: 'Jalan Pemuda Nomor 14, Tanjung Priuk',
    profession: 'Karyawan BUMN',
    age: 27,
    phone: '08***********',
    gender: 'Wanita',
    bloodGroup: 'O',
  },
  {
    id: 3,
    name: 'Adi Putro',
    address: 'Jalan Pemuda Nomor 15, Tanjung Priuk',
    profession: 'Pegawai Negeri Sipil',
    age: 28,
    phone: '08***********',
    gender: 'Pria',
    bloodGroup: 'AB',
  },
  {
    id: 4,
    name: 'Agra Hadiyama',
    address: 'Jalan Pemuda Nomor 16, Tanjung Priuk',
    profession: 'Mahasiswa',
    age: 23,
    phone: '08***********',
    gender: 'Pria',
    bloodGroup: 'A',
  },
  {
    id: 5,
    name: 'Sofia Lin',
    address: 'Jalan Pemuda Nomor 27, Tanjung Priuk',
    profession: 'Mahasiswa',
    age: 20,
    phone: '08***********',
    gender: 'Wanita',
    bloodGroup: 'B',
  },
  {
    id: 8,
    name: 'Grace Everline',
    address: 'Jalan Pemuda Nomor 27, Tanjung Priuk',
    profession: 'Mahasiswa',
    age: 21,
    phone: '08***********',
    gender: 'Wanita',
    bloodGroup: 'B',
  },
]
