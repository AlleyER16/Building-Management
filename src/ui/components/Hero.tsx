export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__main">
        <h1 className="hero__heading">
          공정하고 투명한 건물 관리,
          <br />
          <span>대한건물관리협회</span> 가 함께합니다.
        </h1>
        <p className="hero__sub-heading">
          대한건물관리협회는 건물 관리의 공정성과 투명성을 보장하기 위해
          <br />
          중재와 상담을 지원하는 <span>비영리 단체</span>입니다.
        </p>
        <div className="hero__actions">
          <button>
            중재 요청하기
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z"
                fill="currentColor"
              />
              <path
                d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button>더 알아보기</button>
        </div>
        <div className="hero__footer">
          <div>
            <h1>100+</h1>
            <p>회원 수</p>
          </div>
          <div>
            <h1>10+</h1>
            <p>년 이상의 업계 경력</p>
          </div>
          <div>
            <h1>50+</h1>
            <p>법적 사례 해결 건수</p>
          </div>
        </div>
      </div>
      <div className="hero__right">
        <div></div>
        <img src="./assets/img/hero-img-cropped.png" alt="" />
      </div>
    </div>
  );
}
