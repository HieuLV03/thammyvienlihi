import { useEffect, useState } from "react";
import { HARDCODED_IMAGES } from "../../assets/data/imagesData";
import UploadForm from "../../Components/UploadForm/UploadForm";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { posts } from "../../data/posts";
import "./Home.css";

const Home = () => {

  // ================= STATE =================
  const [images, setImages] = useState([]);
  const [demoImages] = useState(HARDCODED_IMAGES);

  const [feedbacks, setFeedbacks] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const [form, setForm] = useState({
    email: "",
    content: "",
    image_url: ""
  });

  // ================= FETCH =================
  useEffect(() => {
    fetchImages();
    fetchFeedbacks();
  }, []);

  const fetchImages = async () => {
    const { data } = await supabase
      .from("images")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setImages(data);
  };

  const fetchFeedbacks = async () => {
    const { data } = await supabase
      .from("feedbacks")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setFeedbacks(data);
  };

  // ================= ACTION =================
  const handleUploadSuccess = (newImage) => {
    setImages((prev) => [newImage, ...prev]);
  };

  const handleSubmitFeedback = async () => {
    if (!form.email || !form.content) {
      alert("Nhập email và nội dung");
      return;
    }

    const { error } = await supabase.from("feedbacks").insert([form]);

    if (!error) {
      alert("Gửi thành công");
      setForm({ email: "", content: "", image_url: "" });
      fetchFeedbacks();
    }
  };

  // ================= DATA =================
  const allImages = [...images, ...demoImages];
  const visibleFeedbacks = showAll ? feedbacks : feedbacks.slice(0, 3);

  // ================= UI =================
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
            Phun xăm tại nhà uy tín giá rẻ
            <span>Phun môi collagen & chân mày tự nhiên</span>
          </h1>

          <p className="hero-subtext">
            Dịch vụ phun xăm tại nhà uy tín, giá rẻ, làm tận nơi, riêng tư tuyệt đối.
          </p>

          <a href="tel:0933720528" className="btn-explore">
            📞 Đặt lịch ngay
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-grid-section">
        <h2 className="section-title">Dịch vụ</h2>

        <div className="services-container">
          <ServiceCard num="01" title="Phun môi collagen" price="799.000đ" />
          <ServiceCard num="02" title="Điêu khắc chân mày" price="999.000đ" />
        </div>
      </section>

      {/* BLOG */}
      <section className="blog-section">
        <h2 className="blog-title">Bài viết</h2>

        <div className="blog-grid">
          {posts.map((post) => (
            <Link key={post.slug} to={`/${post.slug}`} className="blog-card">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <h2 className="gallery-title">Khách hàng thực tế</h2>

        <UploadForm onUploadSuccess={handleUploadSuccess} />
        <ImageGallery images={allImages} />
      </section>

      {/* FEEDBACK */}
      <section className="feedback-section">
        <h2 className="gallery-title">Khách hàng đánh giá</h2>

        {/* FORM */}
        <div className="feedback-form">
          <input
            type="email"
            placeholder="Email của bạn"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            placeholder="Cảm nhận của bạn..."
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />

          <input
            type="text"
            placeholder="Link ảnh (nếu có)"
            value={form.image_url}
            onChange={(e) => setForm({ ...form, image_url: e.target.value })}
          />

          <button onClick={handleSubmitFeedback}>
            Gửi đánh giá
          </button>
        </div>

        {/* LIST */}
        <div className="feedback-grid">
          {visibleFeedbacks.map((fb) => (
            <div key={fb.id} className="feedback-card">
              {fb.image_url && <img src={fb.image_url} alt="feedback" />}
              <p>{fb.content}</p>
              <div className="feedback-email">{fb.email}</div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        {feedbacks.length > 3 && (
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <button onClick={() => setShowAll(!showAll)}>
              {showAll ? "Thu gọn" : "Xem thêm"}
            </button>
          </div>
        )}
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

const ServiceCard = ({ num, title, price }) => (
  <div className="new-service-card">
    <span className="card-num">{num}</span>
    <h3>{title}</h3>
    <div className="card-price">{price}</div>
    <p>Dịch vụ tại nhà, riêng tư, an toàn</p>
    <div className="card-line"></div>
  </div>
);

export default Home;