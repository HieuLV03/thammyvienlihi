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
      {/* 1. HEADER TINH TẾ */}
      <header className="main-header">
        <nav className="nav-container">
          <div className="logo-brand">LIHI <span>BEAUTY</span></div>
          <ul className="nav-menu">
            <li><a href="#services">Dịch vụ</a></li>
            <li><a href="#gallery">Tác phẩm</a></li>
            <li><a href="tel:0901234567" className="nav-cta">Liên hệ đặt lịch</a></li>
          </ul>
        </nav>
      </header>

      {/* 2. HERO SECTION - PHONG CÁCH TẠP CHÍ */}
      <section className="hero-editorial">
        <div className="hero-content">
          <p className="hero-tagline">Professional Permanent Makeup</p>
          <h1 className="hero-headline">
            Phun xăm tại nhà <br /> <span>Chuyên nghiệp</span>
          </h1>
          <p className="hero-subtext">
            Dịch vụ phun xăm thẩm mỹ tại nhà, với kỹ thuật vi chạm độc quyền, 
            mang lại vẻ đẹp tự nhiên và sự an tâm tuyệt đối.
          </p>
          <div className="hero-actions">
            <a href="#gallery" className="btn-explore">Khám phá tác phẩm</a>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="circle-bg"></div>
        </div>
      </section>

      {/* 3. DỊCH VỤ - BỐ CỤC CARD HIỆN ĐẠI */}
      <section id="services" className="services-grid-section">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">Dịch Vụ Phun xăm tại nhà</h2>
        </div>
        
      </section>

      {/* 4. GALLERY - KHÔNG GIAN TRIỂN LÃM */}
      <section id="gallery" className="gallery-showcase">
        <div className="section-header center">
          <span className="section-number">02</span>
          <h2 className="section-title">Nhật Ký Nhan Sắc</h2>
          <p className="section-subtitle">Minh chứng cho chất lượng qua từng đường kim</p>
        </div>

        <div className="admin-upload-zone">
          <UploadForm onUploadSuccess={handleUploadSuccess} />
        </div>

        <div className="gallery-display">
          <ImageGallery images={images} />
        </div>
      </section>

      {/* 5. FOOTER SANG TRỌNG */}
      <footer className="footer-elegant">
        <div className="footer-content">
          <div className="footer-brand">LIHI BEAUTY</div>
          <div className="footer-info">
            <p>📍 Chuyên phun xăm tại nhà ở Khu vực TPHCM và các khu vực lân cận</p>
            <p>📞 Tư vấn miễn phí: 0933 720 528</p>
          </div>
          <div className="footer-social">
            <span>Facebook</span> — <span>Zalo</span> — <span>Instagram</span>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 LIHI BEAUTY. Crafted with Passion.
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
    <div className="card-footer-line"></div>
  </div>
);

export default Home;