import React, { useState } from 'react';
import { HARDCODED_IMAGES } from '../../assets/data/imagesData.js';
import UploadForm from '../../Components/UploadForm/UploadForm.jsx';
import ImageGallery from '../../Components/ImageGallery/ImageGallery.jsx';
import "./Home.css";

const Home = () => {
  const [images, setImages] = useState(HARDCODED_IMAGES);

  const handleUploadSuccess = (newImage) => {
    setImages([newImage, ...images]);
  };

  return (
    <div className="home-wrapper">

      {/* HEADER */}
      <header className="main-header">
        <nav className="nav-container">
          <div className="logo-brand">LIHI <span>BEAUTY</span></div>
          <ul className="nav-menu">
            <li><a href="#services">Dịch vụ</a></li>
            <li><a href="#gallery">Tác phẩm</a></li>
            <li><a href="tel:0933720528" className="nav-cta">Đặt lịch</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero-editorial">
        <div className="hero-content">

          <h1 className="hero-headline">
            Phun xăm tại nhà TP.HCM  
            <span>Phun môi & chân mày tự nhiên</span>
          </h1>

          <p className="hero-subtext">
            Lihi Beauty chuyên phun môi collagen, điêu khắc chân mày tại nhà.
            Kỹ thuật hiện đại, mực organic an toàn, lên màu tự nhiên.
          </p>

          <a href="tel:0933720528" className="btn-explore">
            📞 Đặt lịch ngay
          </a>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-grid-section">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">Dịch vụ phun xăm tại nhà</h2>
        </div>

        <div className="services-container">
          <ServiceCard 
            num="01"
            title="Phun môi collagen"
            price="1.200.000đ"
            desc="Môi hồng tự nhiên, không sưng, không đau"
          />

          <ServiceCard 
            num="02"
            title="Điêu khắc chân mày"
            price="1.500.000đ"
            desc="Dáng mày tự nhiên, phù hợp khuôn mặt"
          />
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="seo-content">
        <h2>Phun xăm tại nhà TP.HCM uy tín</h2>
        <p>
          Dịch vụ phun xăm tại nhà giúp bạn tiết kiệm thời gian và đảm bảo riêng tư.
          Lihi Beauty cung cấp phun môi collagen và điêu khắc chân mày tận nơi.
        </p>

        <p>
          Phục vụ tại Bình Tân, Tân Phú, Quận 6, Quận 8 và các khu vực lân cận.
          Cam kết mực hữu cơ an toàn, lên màu chuẩn.
        </p>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="gallery-showcase">
        <div className="section-header center">
          <span className="section-number">02</span>
          <h2 className="section-title">Tác phẩm thực tế</h2>
        </div>

        <UploadForm onUploadSuccess={handleUploadSuccess} />
        <ImageGallery images={images} />
      </section>

      {/* FOOTER */}
      <footer className="footer-elegant">
        <div className="footer-content">
          <div className="footer-brand">LIHI BEAUTY</div>
          <div className="footer-info">
            <p>📍 Phun xăm tại nhà TP.HCM</p>
            <p>📞 0933 720 528</p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 LIHI BEAUTY
        </div>
      </footer>

    </div>
  );
};

const ServiceCard = ({ num, title, price, desc }) => (
  <div className="new-service-card">
    <span className="card-num">{num}</span>
    <h3>{title}</h3>
    <div className="card-price">{price}</div>
    <p>{desc}</p>
  </div>
);

export default Home;