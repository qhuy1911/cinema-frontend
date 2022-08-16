import {useState} from "react";
import MovieDataService from "../../services/MovieDataService";
import "./AdminMoviesList.css";
import {useNavigate} from "react-router-dom";
import UploadFilesService from "../../services/UploadFilesService";

function AdminMoviesList() {
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [trailer, setTrailer] = useState("");
  const [description, setDescription] = useState("");
  let navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();
  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    UploadFilesService.upload(selectedFile).then(() => {
      console.log("upload success");
    });

    const movie = {
      name,
      director,
      duration,
      startDate: dateTime,
      description,
      trailer,
      image: `http://localhost:8080/api/files/${selectedFile.name}`,
    };

    MovieDataService.postMovie(movie).then((res) => {});
    alert(`You successfully added movie name${name}`);
    navigate("/admin/movies");
  };

  return (
    <div className="list-movie">
      <form>
        <div className="form-group-container">
          <div class="form-group">
            <label for="exampleFormControlInput1"> Tên phim </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1"> Đạo diễn </label>
            <input
              value={director}
              class="form-control"
              onChange={(e) => setDirector(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group-container">
          <div class="form-group">
            <label for="exampleFormControlTextarea1"> Thời lượng phim </label>
            <input
              value={duration}
              class="form-control"
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1"> Ngày khởi chiếu </label>
            <input
              value={dateTime}
              class="form-control"
              onChange={(e) => setDateTime(e.target.value)}
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1"> Trailer </label>
            <input
              value={trailer}
              class="form-control"
              onChange={(e) => setTrailer(e.target.value)}
            ></input>
          </div>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1"> Mô tả bộ phim </label>
          <textarea
            class="form-control"
            value={description}
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div class="form-group form-image">
          <label for="exampleFormControlTextarea1"> File ảnh </label>
          <input
            type="file"
            id="add-product__input-image"
            onChange={onFileChange}
          />
        </div>
      </form>
      <button onClick={handleSubmit}> Thêm phim </button>
    </div>
  );
}
export default AdminMoviesList;
