import React, { Component } from "react";
import "./Bai2.css";

class Bai2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stt: 0,
      title: "Em sẽ về-Lương Bằng Quang",
      author: "Nhạc sĩ:  Dương Yến Ngọc",
      type: "Nhạc trẻ",
      view: 1234 / 1000,
      share: 12345 / 1000,
      time: "00:234",
      text: (
        <p className="lead">
          <strong>Bài hát: Em Sẽ Về Đâu - Dương Yến Ngọc</strong>
          <br />
          Ta bên nhau đêm nay từng phút giây này đẹp biết mấy <br />
          Hãy nói anh ở lại và đừng rời xa em nhé anh <br />
          Nhưng sao bao đam mê trọn vẹn những cảm giác <br />
          Này được bấy lâu <br />
          Biết em sẽ ra đi để về bên ai chẳng phải em chẳng phải em <br />
          Nỗi buồn từng ngày trôi qua cứ vô tâm đong đầy <br />
          Đã từng nhiều lần con tim em muốn chia tay <br />
          Nhưng rồi nặng lòng mỗi khi có anh giữa đêm lạnh <br />
          Vậy là dại khờ lắm phải không <br />
          Vậy thì cứ dại khờ mãi dại khờ <br />
          Giữ cho đôi ta được trọn vẹn thật mà <br />
          Dấu nỗi đau từng đêm vẫn kêu gào <br />
          Giọt buồn còn dài biết làm sao <br />
          Vậy thì cứ dại khờ mãi dại khờ <br />
          Giữ cho đôi ta được trọn vẹn cơn mơ <br />
          Đến với nhau nào có biết mai sau <br />
          Yêu thương đợi chờ sao quay đầu <br />
          Em sẽ về đâu <br />
        </p>
      )
    };
  }
  pre(a) {
    let temp = this.state.stt - 1;
    if (temp < 0) temp = a.length - 1;

    this.setState({
      stt: a[temp].stt,
      title: a[temp].title,
      author: a[temp].author,
      type: a[temp].type,
      view: a[temp].view / 1000,
      share: a[temp].share / 1000,
      time: a[temp].time,
      text: a[temp].text
    });
  }
  next(a) {
    let temp = this.state.stt + 1;
    if (temp + 1 > a.length) temp = 0;

    this.setState({
      stt: a[temp].stt,
      title: a[temp].title,
      author: a[temp].author,
      type: a[temp].type,
      view: a[temp].view / 1000,
      share: a[temp].share / 1000,
      time: a[temp].time,
      text: a[temp].text
    });
  }
  render() {
    let a = new Array();
    a[0] = {
      stt: 0,
      title: "Em sẽ về-Lương Bằng Quang",
      author: "Nhạc sĩ:  Dương Yến Ngọc",
      type: "Nhạc trẻ",
      view: 1234,
      share: 12345,
      time: "00:34",
      text: (
        <p className="lead">
          <strong>Bài hát: Em Sẽ Về Đâu - Dương Yến Ngọc</strong>
          <br />
          Ta bên nhau đêm nay từng phút giây này đẹp biết mấy <br />
          Hãy nói anh ở lại và đừng rời xa em nhé anh <br />
          Nhưng sao bao đam mê trọn vẹn những cảm giác <br />
          Này được bấy lâu <br />
          Biết em sẽ ra đi để về bên ai chẳng phải em chẳng phải em <br />
          Nỗi buồn từng ngày trôi qua cứ vô tâm đong đầy <br />
          Đã từng nhiều lần con tim em muốn chia tay <br />
          Nhưng rồi nặng lòng mỗi khi có anh giữa đêm lạnh <br />
          Vậy là dại khờ lắm phải không <br />
          Vậy thì cứ dại khờ mãi dại khờ <br />
          Giữ cho đôi ta được trọn vẹn thật mà <br />
          Dấu nỗi đau từng đêm vẫn kêu gào <br />
          Giọt buồn còn dài biết làm sao <br />
          Vậy thì cứ dại khờ mãi dại khờ <br />
          Giữ cho đôi ta được trọn vẹn cơn mơ <br />
          Đến với nhau nào có biết mai sau <br />
          Yêu thương đợi chờ sao quay đầu <br />
          Em sẽ về đâu <br />
        </p>
      )
    };
    a[1] = {
      stt: 1,
      title: "Anh Ngốc Lắm - Minh Vương M4U, Hồng Dương M4U",
      author: "Nhạc sĩ: Thiên Ngôn",
      type: "Nhạc trẻ",
      view: 12345,
      share: 12345,
      time: "01:24",
      text: (
        <p className="lead">
          <strong>
            Bài hát: Anh Ngốc Lắm - Minh Vương M4U, Hồng Dương M4U
          </strong>{" "}
          <br />
          Giọt nước mắt <br />
          Sao chảy hoài không ngắt
          <br />
          Mỗi đêm dài dường như bất tận
          <br />
          Lạc vào trong ký ức về em...
          <br />
          Đã có lúc anh tưởng rằng như mới đây
          <br />
          Ngọt ngào lắm nỗi nhớ vẹn nguyên
          <br />
          Vì quá khứ với hiện tại, đã khác nhau rồi...
          <br />
          Giờ khi em khóc, em có muốn tìm đến anh không
          <br />
          Và khi vấp ngã, em muốn đôi bàn tay của anh
          <br />
          Đỡ em dậy không
          <br />
          Dù rằng ta đã quá xa
          <br />
          Mặc cho khoảng cách anh vẫn mơ ngày em sẽ về
          <br />
          Phải chăng anh ngốc,
          <br />
          Ngốc lắm phải không em
          <br />
          Cứ nghĩ về một người
          <br />
          Sẽ không bao giờ..Quay Về
          <br />
          Nếu phép mầu, đến với anh, thì anh sẽ ước
          <br />
          Được trở lại và yêu em bằng hết trái tim này
          <br />
        </p>
      )
    };
    a[2] = {
      stt: 2,
      title: "Forever Love - Karik",
      author: "Nhạc sĩ: Karik",
      type: "Nhạc trẻ",
      view: 12345,
      share: 12345,
      time: "00:24",
      text: (
        <p className="lead">
          <strong>
            Bài hát : Forever Love - Karik, LiL Knight, BigDaddy, Dương Trần
            Nghĩa, Yanbi, T-Akayz, Andree, Đen, Binz
          </strong>
          <br />
          <a href="https://www.nhaccuatui.com/playlist/ngon-co-ven-duong-thoi-ma-lam-sao-voi-duoc-may-va.kQMa2oLvmW3s.html?st=3">
            loi bai hat
          </a>
        </p>
      )
    };

    return (
      <div className="main2 container bg-dark">
        <div>
          <h3>{this.state.title}</h3>
        </div>
        <div>
          Sang tac : {this.state.author} | The Loai: {this.state.type} | Luot
          xem : {this.state.view} | Chia se :{this.state.share}
        </div>
        <div className="seek">
          <img src={require("./Pre.png")} onClick={() => this.pre(a)} />
          <img
            src={require("./Pause.png")}
            onClick={e => (e.target.src = require("./Play.png"))}
          />

          <img src={require("./Next.png")} onClick={() => this.next(a)} />
          <progress min="0" max="100" value="30" />
          <span className="time">{this.state.time}</span>
        </div>
        <div className="jumbotron">
          <h3 className="loi display-3">Loi Bai hat</h3>
          <hr className="my-2" />
          {this.state.text}
        </div>
      </div>
    );
  }
}

export default Bai2;
