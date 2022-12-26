import axios from "axios";
import { useRef } from "react";

export default function UploadForm() {
  const inputRef = useRef();

  const hSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < inputRef.current.files.length; i += 1) {
      formData.append("image", inputRef.current.files[i]);
    }
    axios.post("http://localhost:5000/monupload", formData);
  };

  return (
    <form encType="multipart/form-data" onSubmit={hSubmit}>
      <input
        type="file"
        name="image"
        multiple
        ref={inputRef}
        accept="image/png"
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}
