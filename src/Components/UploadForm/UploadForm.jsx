import React, { useState } from "react";
import { supabase } from "../../lib/supabase";

const UploadForm = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Chọn ảnh");

    const fileName = `phun-xam-${Date.now()}.jpg`;

    // 1. upload storage
    const { error: uploadError } = await supabase.storage
      .from("images")
      .upload(fileName, file);

    if (uploadError) {
      console.error(uploadError);
      return alert("Upload lỗi");
    }

    // 2. lấy URL
    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(fileName);

    const imageUrl = data.publicUrl;

    // 3. lưu DB
    const { error: insertError } = await supabase
      .from("images")
      .insert([
        {
          image_url: imageUrl,
          title: title,
        },
      ]);

    if (insertError) {
      console.error(insertError);
      return alert("Lỗi lưu DB");
    }

    // 4. update UI
    onUploadSuccess({
      id: Date.now(),
      image_url: imageUrl,
      title,
      created_at: new Date().toISOString(),
    });

    setFile(null);
    setTitle("");
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input
        type="text"
        placeholder="Tiêu đề (vd: Phun môi collagen Bình Tân)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadForm;