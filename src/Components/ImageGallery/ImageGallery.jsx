import React from 'react';
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="gallery-empty-state">
        <div className="icon">📸</div>
        <h3>Chưa có hình ảnh thực tế nào</h3>
        <p>Các tác phẩm mới nhất sẽ được cập nhật tại đây</p>
      </div>
    );
  }

  return (
    <div className="image-gallery-wrapper w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800">Tác phẩm mới nhất</h2>
        <span className="gallery-count">{images.length} hình ảnh</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img) => (
          <article key={img.id} className="image-card-item group">
            <div className="image-container aspect-[4/5]">
              <img 
                src={img.url} 
                alt={'img.title} - Phun xăm tại nhà'}
                loading="lazy"
                className="main-img"
              />
              <div className="image-overlay">
                <span>Xem chi tiết</span>
              </div>
            </div>

            <div className="image-details">
              <div className="flex justify-between items-start mb-2">
                <h3 className="title">{img.title}</h3>
                <span className="badge-new">New</span>
              </div>
              
              <p className="description">{img.desc}</p>

              <div className="card-footer">
                <div className="date">📅 {img.uploadDate}</div>
                <button className="btn-share">Chia sẻ</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;