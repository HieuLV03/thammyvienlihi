import React from "react";
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="gallery-empty-state">
        <div>📸</div>
        <h3>Chưa có hình ảnh</h3>
      </div>
    );
  }

  return (
    <div className="image-gallery-wrapper">
      <h2>Tác phẩm mới nhất ({images.length})</h2>

      <div className="grid">
        {images.map((img) => (
          <div key={img.id} className="card">
            <img
              src={img.image_url}
              alt={`${img.title} - phun xăm tại nhà`}
              loading="lazy"
            />

            <h3>{img.title}</h3>

            <p>
              📅{" "}
              {img.created_at
                ? new Date(img.created_at).toLocaleDateString("vi-VN")
                : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;