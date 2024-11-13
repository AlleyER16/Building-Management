export default function WhoWeAreSection() {
  return (
    <section className="wwa-section">
      <div className="wwa-section__container container">
        <div className="wwa-section__main">
          <div className="wwa-section__header">
            <p>협회 소개</p>
            <h1>
              건물 관리의 <br />
              새로운 표준을 제시합니다.
            </h1>
          </div>
          <div className="wwa-section__body">
            <p>
              대한건물관리협회는 복잡한 건물 관리 문제를 해결하고,
              <br />
              이해관계자 간의 원활한 소통을 이끌어내기 위해 설립되었습니다.
            </p>
            <p>
              협회는 공정한 중재와 신뢰할 수 있는 상담을 통해, <br />
              건물 관리가 투명하게 이루어지도록 지원합니다. <br />
              모든 이해관계자에게 합당한 기준을 제공함으로써, <br />
              <span>공공의 이익을 도모하는 것을 목표</span>로 합니다.
            </p>
          </div>
          <button className="wwa-section__btn">
            협회 가입신청
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
        </div>
        <div className="wwa-section__right">
          <div className="who-we-are">
            <div className="who-we-are__icon">
              <svg
                width="25"
                height="36"
                viewBox="0 0 25 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 34.9685V33.937L12.4632 33.9588L24.9263 33.9806L24.9507 34.9903L24.975 36H12.4875H0V34.9685ZM0 20.275V7.81549L1.0584 6.94369L2.11679 6.07188L2.13898 19.2958C2.15119 26.5689 2.14269 32.568 2.1201 32.6271C2.09037 32.7048 1.7916 32.7345 1.03951 32.7345H0V20.275ZM3.59585 32.6012C3.56645 32.525 3.54362 26.2303 3.54514 18.6129C3.54727 7.85981 3.57142 4.73333 3.65313 4.62962C3.81032 4.43012 5.49674 3.17343 5.60727 3.17343C5.67685 3.17343 5.69693 7.19017 5.68103 17.9325L5.65918 32.6916L4.65425 32.7157C3.79504 32.7363 3.64156 32.7197 3.59585 32.6012ZM7.08477 17.316V1.89224L7.2991 1.67907C7.41697 1.56183 7.90307 1.15206 8.37932 0.768463L9.24522 0.0710194L9.22339 16.3813L9.20157 32.6916L8.14317 32.7157L7.08477 32.7398V17.316ZM10.7136 16.3673V0L11.0808 0.157847C11.4228 0.30488 13.0929 1.20461 16.1999 2.91563C16.9127 3.30816 18.2541 4.04314 19.1807 4.5489C20.1074 5.05466 21.1766 5.6413 21.5567 5.85255C24.0712 7.24978 24.6841 7.59933 24.8183 7.71273C24.9608 7.83314 24.9695 8.46139 24.9695 18.6548C24.9695 24.6026 24.9375 29.4691 24.8984 29.4691C24.8184 29.4691 23.9546 28.5855 22.4207 26.9346C21.5026 25.9465 20.7053 25.091 20.1743 24.5244C20.0024 24.3409 18.2224 22.4545 17.058 21.2216C16.7221 20.8659 16.1777 20.2848 15.8484 19.9302C14.2145 18.1712 13.0093 16.9228 12.945 16.9228C12.9057 16.9228 12.8736 17.3244 12.8736 17.8153V18.7079L13.9305 19.8562C14.5119 20.4878 15.1242 21.1564 15.2913 21.342C15.4584 21.5276 15.6535 21.7422 15.7247 21.8189C15.796 21.8957 16.3013 22.4399 16.8475 23.0283C17.3938 23.6168 18.0578 24.3302 18.3231 24.6138C20.4951 26.9353 21.631 28.1453 22.155 28.6957C24.1549 30.7962 24.8995 31.6329 24.9603 31.8479C24.998 31.9811 25.0112 32.235 24.9897 32.4123L24.9506 32.7345H24.0711H23.1916L21.899 31.3462C21.188 30.5826 20.4077 29.7415 20.165 29.4771C19.7219 28.9944 17.4911 26.5857 17.3253 26.411C17.2766 26.3596 16.8479 25.896 16.3727 25.3806C15.6425 24.5887 14.3635 23.2396 13.1623 21.9943L12.8736 21.6949L12.8776 25.2168L12.8817 28.7386L14.7784 30.6609C15.8216 31.7182 16.6751 32.6173 16.6751 32.6589C16.6751 32.701 15.3533 32.7345 13.6944 32.7345H10.7136V16.3673ZM22.8095 16.454V8.86295L22.3991 8.608C21.8312 8.25519 18.8393 6.58905 16.4591 5.30007C15.9364 5.01699 15.2949 4.66025 15.0335 4.50732C14.7722 4.35438 14.1793 4.02772 13.716 3.7814L12.8736 3.33357V8.68031V14.0271L14.1912 15.3675C14.9159 16.1047 16.13 17.3653 16.8892 18.1688C20.2961 21.7742 22.642 24.1481 22.739 24.0885C22.7778 24.0646 22.8095 20.6291 22.8095 16.454Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="who-we-are__item who-we-are__item--1">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 11H8M10 15H8M16 7H8M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H11.5M22 22L20.5 20.5M21.5 18C21.5 19.933 19.933 21.5 18 21.5C16.067 21.5 14.5 19.933 14.5 18C14.5 16.067 16.067 14.5 18 14.5C19.933 14.5 21.5 16.067 21.5 18Z"
                    stroke="currentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              투명성
            </div>
            <div className="who-we-are__item who-we-are__item--2">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 17V16.8498C2 16.5333 2 16.3751 2.02421 16.2209C2.0457 16.084 2.08136 15.9497 2.13061 15.8202C2.18609 15.6743 2.2646 15.5369 2.42162 15.2622L6 9M2 17C2 19.2091 3.79086 21 6 21C8.20914 21 10 19.2091 10 17M2 17V16.8C2 16.52 2 16.38 2.0545 16.273C2.10243 16.1789 2.17892 16.1024 2.273 16.0545C2.37996 16 2.51997 16 2.8 16H9.2C9.48003 16 9.62004 16 9.727 16.0545C9.82108 16.1024 9.89757 16.1789 9.9455 16.273C10 16.38 10 16.52 10 16.8V17M6 9L9.57838 15.2622C9.7354 15.5369 9.81391 15.6743 9.86939 15.8202C9.91864 15.9497 9.9543 16.084 9.97579 16.2209C10 16.3751 10 16.5333 10 16.8498V17M6 9L18 7M14 15V14.8498C14 14.5333 14 14.3751 14.0242 14.2209C14.0457 14.084 14.0814 13.9497 14.1306 13.8202C14.1861 13.6743 14.2646 13.5369 14.4216 13.2622L18 7M14 15C14 17.2091 15.7909 19 18 19C20.2091 19 22 17.2091 22 15M14 15V14.8C14 14.52 14 14.38 14.0545 14.273C14.1024 14.1789 14.1789 14.1024 14.273 14.0545C14.38 14 14.52 14 14.8 14H21.2C21.48 14 21.62 14 21.727 14.0545C21.8211 14.1024 21.8976 14.1789 21.9455 14.273C22 14.38 22 14.52 22 14.8V15M18 7L21.5784 13.2622C21.7354 13.5369 21.8139 13.6743 21.8694 13.8202C21.9186 13.9497 21.9543 14.084 21.9758 14.2209C22 14.3751 22 14.5333 22 14.8498V15M12 3V8"
                    stroke="currentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              공정성
            </div>
            <div className="who-we-are__item who-we-are__item--3">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15.5 9.5M17.9012 4.99851C18.1071 5.49653 18.5024 5.8924 19.0001 6.09907L20.7452 6.82198C21.2433 7.02828 21.639 7.42399 21.8453 7.92206C22.0516 8.42012 22.0516 8.97974 21.8453 9.47781L21.1229 11.2218C20.9165 11.7201 20.9162 12.2803 21.1236 12.7783L21.8447 14.5218C21.9469 14.7685 21.9996 15.0329 21.9996 15.2999C21.9997 15.567 21.9471 15.8314 21.8449 16.0781C21.7427 16.3249 21.5929 16.549 21.4041 16.7378C21.2152 16.9266 20.991 17.0764 20.7443 17.1785L19.0004 17.9009C18.5023 18.1068 18.1065 18.5021 17.8998 18.9998L17.1769 20.745C16.9706 21.2431 16.575 21.6388 16.0769 21.8451C15.5789 22.0514 15.0193 22.0514 14.5212 21.8451L12.7773 21.1227C12.2792 20.9169 11.7198 20.9173 11.2221 21.1239L9.47689 21.8458C8.97912 22.0516 8.42001 22.0514 7.92237 21.8453C7.42473 21.6391 7.02925 21.2439 6.82281 20.7464L6.09972 19.0006C5.8938 18.5026 5.49854 18.1067 5.00085 17.9L3.25566 17.1771C2.75783 16.9709 2.36226 16.5754 2.15588 16.0777C1.94951 15.5799 1.94923 15.0205 2.1551 14.5225L2.87746 12.7786C3.08325 12.2805 3.08283 11.7211 2.8763 11.2233L2.15497 9.47678C2.0527 9.2301 2.00004 8.96568 2 8.69863C1.99996 8.43159 2.05253 8.16715 2.15472 7.92043C2.25691 7.67372 2.40671 7.44955 2.59557 7.26075C2.78442 7.07195 3.00862 6.92222 3.25537 6.8201L4.9993 6.09772C5.49687 5.89197 5.89248 5.4972 6.0993 5.00006L6.82218 3.25481C7.02848 2.75674 7.42418 2.36103 7.92222 2.15473C8.42027 1.94842 8.97987 1.94842 9.47792 2.15473L11.2218 2.87712C11.7199 3.08291 12.2793 3.08249 12.7771 2.87595L14.523 2.15585C15.021 1.94966 15.5804 1.9497 16.0784 2.15597C16.5763 2.36223 16.972 2.75783 17.1783 3.25576L17.9014 5.00153L17.9012 4.99851Z"
                    stroke="currentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              신뢰성
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}