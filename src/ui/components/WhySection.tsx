export default function WhySection() {
  return (
    <section className="why-section">
      <div className="why-section__main">
        <h1 className="why-section__heading">
          <span>왜</span> 건물 관리는 <br />
          항상 그렇게 복잡하고 <br />
          어려운 걸까요?
        </h1>
        <div className="why-section__info">
          <span>*</span>
          <p>
            “이러한 문제들로 인해 관리자의 업무 부담이 늘어나고, <br />
            건물의 가치가 저하될 수 있습니다.”
          </p>
        </div>
      </div>
      <div className="why-section__items">
        <div className="why-item open">
          <button className="why-item__header">
            <p>관리비의 불투명성</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="why-item__icon open"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="why-item__icon close"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="why-item__body">
            관리비 산정 및 집행의 불투명성은 입주자와 관리주체 간의 신뢰를
            저해합니다. 명확한 공시와 투명한 회계처리가 부족하면 이해관계자 간의
            불신과 분쟁을 유발할 수 있습니다.
          </div>
        </div>
        <div className="why-item">
          <button className="why-item__header">
            <p>공실 관리 기준의 혼란</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="why-item__icon open"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="why-item__icon close"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="why-item__body">
            관리비 산정 및 집행의 불투명성은 입주자와 관리주체 간의 신뢰를
            저해합니다. 명확한 공시와 투명한 회계처리가 부족하면 이해관계자 간의
            불신과 분쟁을 유발할 수 있습니다.
          </div>
        </div>
        <div className="why-item">
          <button className="why-item__header">
            <p>관리비의 불투명성</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="why-item__icon open"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="why-item__icon close"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="why-item__body">
            관리비 산정 및 집행의 불투명성은 입주자와 관리주체 간의 신뢰를
            저해합니다. 명확한 공시와 투명한 회계처리가 부족하면 이해관계자 간의
            불신과 분쟁을 유발할 수 있습니다.
          </div>
        </div>
      </div>
      <div className="why-section__info-2">
        <span>*</span>
        <p>
          “이러한 문제들로 인해 관리자의 업무 부담이 늘어나고, <br />
          건물의 가치가 저하될 수 있습니다.”
        </p>
      </div>
    </section>
  );
}
