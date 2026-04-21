import img1 from "../assets/phun-moi-collagen.jpg";
import img2 from "../assets/phun-xam-chan-mai.jpg";
import img3 from "../assets/phun-nhu-hoa.jpg";
import img4 from "../assets/phun-vung-kin.jpg";

export const posts = [
  {
    slug: "phun-xam-tai-nha-uy-tin",
    title: "Phun xăm tại nhà uy tín",
    description: "Dịch vụ phun xăm tại nhà uy tín, an toàn, riêng tư",
    image: img1, // 👈 THÊM
    services: [
      {
        id: 1,
        image: img1,
        title: "Phun môi collagen",
        price: "799.000đ",
        desc: "Làm tại nhà, an toàn, không đau",
        zalo: "https://zalo.me/0933720528"
      }
    ]
  },

  {
    slug: "phun-xam-tai-nha-uy-tin-gia-re",
    title: "Phun xăm tại nhà uy tín giá rẻ",
    description: "Phun xăm giá rẻ nhưng vẫn đảm bảo chất lượng cao",
    image: img2, // 👈 THÊM
    services: [
      {
        id: 1,
        image: img1,
        title: "Phun môi collagen",
        price: "799.000đ",
        desc: "Giá rẻ – chất lượng cao",
        zalo: "https://zalo.me/0933720528"
      }
    ]
  },

  {
    slug: "bang-gia-dich-vu",
    title: "Bảng giá dịch vụ",
    description: "Tổng hợp các dịch vụ phun xăm tại nhà",
    image: img3, // 👈 THÊM
    services: [
      {
        id: 1,
        image: img1,
        title: "Phun môi collagen",
        price: "799.000đ",
        desc: "Dịch vụ tại nhà, riêng tư, an toàn",
        zalo: "https://zalo.me/0933720528"
      }
    ]
  }
];