import FamilyLink from "./FamilyLink"
import ServiceLink from "./ServiceLink"

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="ft_top">
                <div className="inner">
                    <ul className="left">
                        <li><a href="#!">개인정보처리방침</a></li>
                        <li><a href="#!">윤리경영 사이버신문고</a></li>
                        <li><a href="#!">손님상담센터 <span>031-320-5000</span></a></li>
                    </ul>
                    <div className="right">
                        <ServiceLink />
                    </div>
                </div>
            </div>
            <div className="ft_bottom">
                <div className="inner">
                    <div className="left">
                        <address>경기도 용인시 처인구 포곡읍 에버랜드로 199 삼성물산(주)</address>
                        <span>COPYRIGHT &copy; Copyright © Samsung C&T Corporation. All rights reserved.</span>
                    </div>
                    <div className="right">
                        <FamilyLink />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer