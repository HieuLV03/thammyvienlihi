import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { posts } from "../data/posts";
import "./PostDetail.css";

const PostDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <h2 style={{ padding: 30 }}>Không tìm thấy bài viết</h2>;

  return (
    <div className="post-wrapper">

      {/* HEADER */}
      <header className="main-header">
        <nav className="nav-container">
          <div className="logo-brand">LIHI <span>BEAUTY</span></div>

          <ul className="nav-menu">
            <li><Link to="/">Trang chủ</Link></li>
            <li>
              <a href="tel:0933720528" className="nav-cta">
                Đặt lịch
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section className="post-hero">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </section>

      {/* BACK */}
      <div className="post-back">
        <button onClick={() => navigate(-1)}>← Quay lại</button>
      </div>

      {/* CONTENT */}
      <div className="post-container">

        {/* CASE 1: có services */}
        {post.services ? (
          <div className="service-grid">
            {post.services.map((item) => (
              <div key={item.id} className="service-card">

                <img src={item.image} alt={item.title} />

                <h3>{item.title}</h3>

                <div className="price">{item.price}</div>

                <p>{item.desc}</p>

                <a
                  href={item.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zalo-btn"
                >
                  💬 Tư vấn ngay
                </a>

              </div>
            ))}
          </div>
        ) : (
          /* CASE 2: content HTML */
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}

      </div>

      {/* CTA */}
      <div className="post-cta">
        <a href="tel:0933720528">📞 Đặt lịch ngay</a>
      </div>

      {/* FOOTER */}
      <footer className="footer-elegant">
        <div className="footer-content">
          <div className="footer-brand">Thẩm mỹ viện LiHi</div>
          <div className="footer-info">
            <p>📍 Phun xăm tại nhà uy tín chuyên nghiệp</p>
            <p>📞 0933 720 528</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Thẩm mỹ viện LiHi
        </div>
      </footer>

    </div>
  );
};

export default PostDetail;