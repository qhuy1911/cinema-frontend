import { useEffect, useState } from "react"
import MovieDataService from "../../services/MovieDataService"
import "./AdminMoviesList.css"
import { useNavigate } from "react-router-dom";
function AdminMoviesList() {
    const [name, setName] = useState('')
    const [director, setDirector] = useState('')
    const [duration, setDuration] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [description, setDescription] = useState('')
    let navigate = useNavigate();
    const [avatar, setAvatar] = useState()

    const handleSubmit = () => {
        const movie = {
            name,
            director,
            duration,
            dateTime: +dateTime,
            description,
            avatar: +avatar.name
        }
        console.log(name,
            director,
            duration,
            dateTime + dateTime,
            description,
            avatar.name);
        console.log("kdl", typeof (name), "va", typeof (avatar.name));

        MovieDataService.postMovie(movie)
            .then((res => {
            }))
        alert(`You successfully added movie name${name}`)
        navigate("/admin/movies")

    }
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)
        setAvatar(file)
        console.log(file.name);
    }
    useEffect(() => {
        return (() => {
            avatar && URL.revokeObjectURL(avatar.preview)

        })
    }, [avatar])

    return (
        <div className="list-movie">
            <form>
                <div className="form-group-container">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Tên phim</label>
                        <input value={name}
                            onChange={e => setName(e.target.value)}
                            class="form-control"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Đạo diễn</label>
                        <input value={director}
                            class="form-control"
                            onChange={e => setDirector(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group-container">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Thời lượng phim</label>
                        <input value={duration}
                            class="form-control"
                            onChange={e => setDuration(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Ngày khởi chiếu</label>
                        <input value={dateTime}
                            class="form-control"
                            onChange={e => setDateTime(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Mô tả bộ phim</label>
                    <textarea class="form-control"
                        value={description}
                        rows="3"
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>


                <div class="form-group form-image">
                    <label for="exampleFormControlTextarea1">File ảnh</label>
                    <input type="file"
                        onChange={handlePreviewAvatar}
                    />
                    {avatar && (
                        <img src={avatar.preview} alt="anh day ne" width="20%" />
                    )}

                </div>
            </form>
            <button onClick={handleSubmit}>Thêm phim</button>
        </div>
    )
}
export default AdminMoviesList