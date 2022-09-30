const NEWS = [
    { id: 1, category: "새 소식", title: "PICK-UP 서비스", date: "할로윈 상품", link: "/", src: "/assets/images/main_news01.jpg" },
    { id: 2, category: "새 소식", title: "크레이지 좀비 헌트", date: "좀비와 인간들의 사투 현장", link: "/", src: "/assets/images/main_news02.jpg" },
    { id: 3, category: "새 소식", title: "블러드시티", date: "탈출할 생존자를 찾습니다.", link: "/", src: "/assets/images/main_news03.jpg" },
    { id: 4, category: "새 소식", title: "호러 메이즈", date: "스마트 예약 오픈", link: "/", src: "/assets/images/main_news04.jpg" },
    { id: 5, category: "새 소식", title: "폴 인 가든 콘서트", date: "튠업 뮤지션의 무대", link: "/", src: "/assets/images/main_news05.jpg" },
    { id: 6, category: "이벤트", title: "할로윈 코스튬 + 에버랜드 이용권", date: "펀딩 OPEN", link: "/", src: "/assets/images/main_news06.jpg" },
    { id: 7, category: "이벤트", title: "할로윈 포토북 출시", date: "에버랜드 X 스냅스", link: "/", src: "/assets/images/main_news07.jpg" },
    { id: 8, category: "이벤트", title: "청춘 마이크", date: "다양한 공연을 신나게", link: "/", src: "/assets/images/main_news08.jpg" },
]


const News = () => {
    return (
        <section className="News csc">
            <h2>에버랜드 소식</h2>
            <p>에버랜드의 새소식을 전해드립니다.</p>
            <div className="inner">
                {
                    NEWS.map(news => {
                        return (
                            <figure key={news.id}>
                                <a href={news.link}>
                                    <div className="box">
                                        <img src={process.env.PUBLIC_URL + news.src} alt={news.title} />
                                    </div>
                                    <strong>{news.category}</strong>
                                    <div className="title">{news.title}</div>
                                    <span>{news.date}</span>
                                </a>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default News;