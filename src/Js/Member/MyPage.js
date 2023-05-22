import { React, useState, useEffect } from "react";
import "../../Css/Member/MyPage.css";
import { call, logout, dropoutUser } from "../../Service/ApiService";
import * as AppStorage from "../../AppStorage";
function MyPage() {
  const [user, setUser] = useState({ email: "", name: "" });
  useEffect(() => {
    // call("/api/member/getMember", "GET", null).then((response) =>
    //   setUser({ email: response.data.email, name: response.data.name })
    // );
    var myemail = AppStorage.getItem("email");
    // alert(myemail);
    setUser({ email: myemail });
  }, []);
  const myposts = () => {
    window.location.href = "/myposts";
  };
  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };
  const handleDropoutUser = () => {
    if (window.confirm("회원 탈퇴하시겠습니까?") == true) {
      alert("회원탈퇴 되었습니다.");
      dropoutUser();
      window.location.href = "/";
    }
  };
  return (
    <>
      <div className="header">
        <span class="material-symbols-rounded">chevron_left</span>
        <div className="name">마이페이지</div>
      </div>
      <div className="profile-container">
        {/* <img src="" alt=""></img> */}
        <div className="img"></div>
        <div className="mypage-explain">
          <div className="username">{user.name}</div>

          <div>학교 인증 : {user.email}</div>
        </div>
      </div>
      <div className="button-container2">
        <ul>
          <div className="blue-container">
            <li className="mypage-title">계정</li>
            <li className="mypage-content">학교인증</li>
          </div>
          <div className="blue-container">
            <li className="mypage-title">게시물</li>
            <li className="mypage-content" onClick={() => myposts()}>
              내가 쓴 게시물
            </li>
          </div>
          <div className="blue-container">
            <li className="mypage-title">회원</li>
            <li className="mypage-content">회원정보수정</li>
            <li className="mypage-content" onClick={() => handleLogout()}>
              로그아웃
            </li>
            <li className="mypage-content" onClick={() => handleDropoutUser()}>
              회원탈퇴
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default MyPage;
