import {useState} from "react";
import "./TheaterList.css";
import UploadFilesService from "../../../services/UploadFilesService";
import TheaterServices from "../../../services/TheaterServices";

function AddTheater() {
  const [selectedFile, setSelectedFile] = useState();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const addTheater = () => {
    UploadFilesService.upload(selectedFile).then(() => {
      console.log("upload success");
    });

    const theater = {
      name,
      address,
      image: `http://localhost:8080/api/files/${selectedFile.name}`,
    };

    TheaterServices.addTheater(theater).then(() => {
      // navigate("/admin/theaters");
    });
  };

  return (
    <div className="theater-list-wrapper">
      <h1>Add Theater</h1>
      <form>
        <div className="theater-input">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="theater-input">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="theater-input">
          <label htmlFor="add-product__input-image">Image</label>
          <input
            type="file"
            id="add-product__input-image"
            onChange={onFileChange}
          />
        </div>
        <div>
          <button onClick={addTheater}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddTheater;
