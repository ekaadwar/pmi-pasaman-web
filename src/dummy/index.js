import {
  FaFacebookSquare as Facebook,
  FaWhatsappSquare as WhatsApp,
  FaInstagramSquare as Instagram,
  FaTwitterSquare as Twitter,
} from "react-icons/fa";

export const bloodStock = [
  { type: "A", amount: 20 },
  { type: "B", amount: 25 },
  { type: "AB", amount: 18 },
  { type: "O", amount: 22 },
];

export const socialMedia = [
  { media: "Contact Person", icon: <WhatsApp size={24} /> },
  { media: "Facebook", icon: <Facebook size={24} /> },
  { media: "Instagram", icon: <Instagram size={24} /> },
  { media: "Twitter", icon: <Twitter size={24} /> },
];

export const donorHistory = [
  { id: 1, date: "1 Januari 2021", status: "selesai" },
  { id: 2, date: "3 Maret 2021", status: "selesai" },
  { id: 3, date: "7 Juni 2021", status: "selesai" },
  { id: 4, date: "10 September 2021", status: "selesai" },
  { id: 5, date: "12 Januari 2022", status: "selesai" },
  { id: 6, date: "20 April 2022", status: "selesai" },
  { id: 7, date: "3 Maret 2022", status: "selesai" },
  { id: 8, date: "7 Juni 2022", status: "selesai" },
  { id: 9, date: "10 September 2022", status: "menunggu" },
];
