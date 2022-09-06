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
