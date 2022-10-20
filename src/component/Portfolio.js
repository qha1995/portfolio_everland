import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const PTF = [
    { id: 1, title: "할로윈 파티" },
    { id: 2, title: "주토피아" },
    { id: 3, title: "플라워 가든" },
    { id: 4, title: "캔디 & 쿠키" },
    { id: 5, title: "퍼레이드" },
    { id: 6, title: "T 익스프레스" },
    { id: 7, title: "콜롬버스 대탐험" },
    { id: 8, title: "더블 락스핀" },
    { id: 9, title: "대관람차 리뉴얼" },
]

// 배열 메소드를 공부하기... 검색하기... 스프레드 연산자...
const NPTF = [...PTF, PTF[0]].splice(1, PTF.length);

const Portfolio = () => {
    const LS = useRef();
    const RS = useRef();

    const [LSS, setLSS] = useState();
    const [RSS, setRSS] = useState();

    useEffect(() => {
        setLSS(LS.current);
        setRSS(RS.current);
    }, [])


    return (
        <section className="Portfolio csc">
            <h2>에버랜드 즐길거리 소개</h2>
            <p>다양한 즐길거리가 있는 꿈과 환상의 나라 에버랜드 !</p>
            <div className="container">
                <div className="left">
                    <div className="slide">
                        <Slider
                            fade={true}
                            ref={LS}
                            asNavFor={RSS}
                            arrows={false}
                            responsive={
                                [
                                    {
                                        breakpoint: 768,
                                        settings: {
                                            slidesToShow: 1,
                                            autoplay: true,
                                            infinite: true,

                                        }
                                    }
                                ]}

                        >
                            {
                                PTF.map(building => {
                                    return (
                                        <figure key={building.id}>
                                            <div className="box">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/main_m0" + building.id + ".jpg"} alt="" />
                                            </div>
                                            <div className='des'>{building.title}</div>
                                        </figure>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
                <div className="right">
                    <h2>에버랜드 즐길거리 소개</h2>
                    <p>다양한 즐길거리가 있는 꿈과 환상의 나라 에버랜드 !</p>

                    <div className="arrows">
                        <i className='xi-angle-left' onClick={() => LS.current.slickPrev()}></i>
                        <i className='xi-angle-right' onClick={() => LS.current.slickNext()}></i>
                    </div>
                    <div className="slide">
                        <Slider slidesToShow={5} className="right_slide"
                            ref={RS}
                            asNavFor={LSS}
                            arrows={false}
                            responsive={
                                [
                                    {
                                        breakpoint: 768,
                                        settings: {
                                            slidesToShow: 1,

                                            infinite: true,

                                        }
                                    }
                                ]}



                        >
                            {
                                NPTF.map(building => {
                                    return (
                                        <figure key={building.id}>
                                            <div className="box">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/main_m0" + building.id + ".jpg"} alt="" />
                                            </div>
                                            <div className='des'>{building.title}</div>
                                        </figure>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="banner">
                <figure><img src={process.env.PUBLIC_URL + "/assets/images/banner01.png"} alt="" /></figure>
            </div>
            <div className="vibration">
                <figure><img src={process.env.PUBLIC_URL + "/assets/images/main_obj2.png"} alt="" /></figure>
            </div>
        </section>
    )
}
export default Portfolio;