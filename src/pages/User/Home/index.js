import {faCircleInfo, faGlobe,faList} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieCard from "../../../components/MovieCard";
import ScheduleHome from "../../../components/SchedulesHome";
import "./Home.css";

function Home() {
  const movies = [
    {
      id: 1,
      name: "DORAEMON: NOBITA VÀ CUỘC CHIẾN VŨ TRỤ TÍ HON 2020",
      description:
        "Nobita tình cờ gặp được người ngoài hành tinh tí hon Papi, vốn là Tổng thống của hành tinh Pirika, chạy trốn tới Trái Đất để thoát khỏi những kẻ nổi loạn nơi quê nhà. Doraemon, Nobita và hội bạn thân dùng bảo bối đèn pin thu nhỏ biến đổi theo kích cỡ giống Papi để chơi cùng cậu bé. Thế nhưng, một tàu chiến không gian tấn công cả nhóm. Cảm thấy có trách nhiệm vì liên lụy mọi người, Papi quyết định một mình đương đầu với quân phiến loạn tàn ác. Doraemon và các bạn lên đường đến hành tinh Pirika, sát cánh bên người bạn của mình.",

      director: "Susumu Yamaguchi",
      duration: 120,
      image:
        "https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/short/62748ad93f056487193911.jpg",
      startDate: "27/05/2022",
    },
    {
      id: 2,
      name: "DORAEMON: NOBITA VÀ CUỘC CHIẾN VŨ TRỤ TÍ HON 2021",
      description:
        "Nobita tình cờ gặp được người ngoài hành tinh tí hon Papi, vốn là Tổng thống của hành tinh Pirika, chạy trốn tới Trái Đất để thoát khỏi những kẻ nổi loạn nơi quê nhà. Doraemon, Nobita và hội bạn thân dùng bảo bối đèn pin thu nhỏ biến đổi theo kích cỡ giống Papi để chơi cùng cậu bé. Thế nhưng, một tàu chiến không gian tấn công cả nhóm. Cảm thấy có trách nhiệm vì liên lụy mọi người, Papi quyết định một mình đương đầu với quân phiến loạn tàn ác. Doraemon và các bạn lên đường đến hành tinh Pirika, sát cánh bên người bạn của mình.",

      director: "Susumu Yamaguchi",
      duration: 120,
      image:
        "https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/short/62748ad93f056487193911.jpg",
      startDate: "27/05/2022",
    },
    {
      id: 3,
      name: "DORAEMON: NOBITA VÀ CUỘC CHIẾN VŨ TRỤ TÍ HON 2022",
      description:
        "Nobita tình cờ gặp được người ngoài hành tinh tí hon Papi, vốn là Tổng thống của hành tinh Pirika, chạy trốn tới Trái Đất để thoát khỏi những kẻ nổi loạn nơi quê nhà. Doraemon, Nobita và hội bạn thân dùng bảo bối đèn pin thu nhỏ biến đổi theo kích cỡ giống Papi để chơi cùng cậu bé. Thế nhưng, một tàu chiến không gian tấn công cả nhóm. Cảm thấy có trách nhiệm vì liên lụy mọi người, Papi quyết định một mình đương đầu với quân phiến loạn tàn ác. Doraemon và các bạn lên đường đến hành tinh Pirika, sát cánh bên người bạn của mình.",

      director: "Susumu Yamaguchi",
      duration: 120,
      image:
        "https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/short/62748ad93f056487193911.jpg",
      startDate: "27/05/2022",
    },
  ];
  return (
    <div>
      <div className="home-cinema-container">
        <img
          src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png"
          alt="logo"
        ></img>
        <div className="home-cinema-info">
          <h2>Cinestar Sinh Viên</h2>
          <span className="text-muted ">
            Nhà Văn hóa Sinh viên Đại học Quốc gia TP.HCM, P. Đông Hòa, tx. Dĩ
            An, Bình Dương
          </span>
          <br />
          <span className="text-muted">
            <FontAwesomeIcon
              icon={faGlobe}
              className="home-info-icon icon-globe text-muted"
            />
            Bình Dương
            <FontAwesomeIcon
              icon={faList}
              className="home-info-icon text-muted"
            />
            Cinestar
          </span>
          <p>
            Xem lịch chiếu và mua vé Cinestar Sinh Viên, rạp Cinestar toàn quốc
            dễ dàng - nhanh chóng tại Moveek. Rạp Cinestar Sinh Viên nằm ở Nhà
            văn hóa Sinh Viên - ĐHQG, được xây dựng với tiêu chuẩn rạp
            Hollywood, chuẩn âm thanh Dolby 7.1, màn hình lớn, sắc nét. Cinestar
            Sinh Viên có vị trí khá đắc địa khi nằm gọn trong khuôn viên hội họp
            của ĐHQG, thuận tiện di chuyển cho các bạn sinh đang học tập tại
            đây. Với chất lượng giải trí tuyệt vời và giá vé cạnh tranh,
            Cinestar Sinh Viên là điểm đến giải trí mới không thể bỏ qua.
          </p>
        </div>
      </div>
      <ScheduleHome />
      <div className="home-container">
        <div className="description">
          <FontAwesomeIcon icon={faCircleInfo} className="home-info-icon" />
          Nhấn vào suất chiếu để tiến hành mua vé
        </div>
      </div>
      <div className="movie-list">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} data={movie} />;
        })}
      </div>
    </div>
  );
}

export default Home;
