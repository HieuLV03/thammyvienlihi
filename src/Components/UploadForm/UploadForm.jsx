import React, { useState, useEffect } from 'react';
import "./UploadForm.css";

function UploadForm({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [uploading, setUploading] = useState(false);

  // Tạo ảnh xem trước khi chọn file
  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const handleUpload = async () => {
    if (!file) return alert("Vui lòng chọn ảnh!");
    setUploading(true);
    
    // Giả lập lưu trữ
    const newImage = {
      id: Date.now(),
      url: preview,
      title: title.trim() || "Tác phẩm mới",
      desc: desc.trim() || "Hình ảnh thực tế tại nhà khách",
      uploadDate: new Date().toLocaleDateString('vi-VN')
    };

    setTimeout(() => {
      onUploadSuccess(newImage);
      setFile(null); 
      setTitle(''); 
      setDesc('');
      setUploading(false);
      alert("✅ Đã đăng ảnh thành công!");
    }, 800);
  };

  return (
    <div className="upload-wrapper">
      <div className="upload-container">
        <h3>📤 Đăng ảnh Feedback khách hàng</h3>
        
        <div className="form-group">
          <div className="file-input-wrapper">
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              id="file-upload"
            />
            <label htmlFor="file-upload" className="file-label">
              {file ? `📂 ${file.name}` : "Chọn hình ảnh tác phẩm"}
            </label>
          </div>

          {preview && (
            <div className="image-preview-box">
              <img src={preview} alt="Preview" />
            </div>
          )}

          <input 
            type="text" 
            placeholder="Tiêu đề (VD: Phun môi chị Lan - Quận 7)" 
            className="input-field"
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea 
            placeholder="Mô tả kỹ thuật (VD: Mực hữu cơ, tone hồng cam...)" 
            className="input-field textarea-field"
            value={desc} 
            onChange={(e) => setDesc(e.target.value)}
            rows={3}
          />

          <button 
            onClick={handleUpload}
            disabled={uploading || !file}
            className="submit-btn"
          >
            {uploading ? "Đang xử lý..." : "🚀 Đăng lên Gallery"}
          </button>
        </div>
        <p className="seo-note">💡 Gợi ý: Viết mô tả có tên Quận để khách dễ tìm thấy bạn trên Google.</p>
      </div>
    </div>
  );
}

export default UploadForm;