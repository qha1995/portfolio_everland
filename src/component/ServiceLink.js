import { useEffect, useState } from "react"

const SERVICE = [
    {
        id: 1, title: "사이트 맵",
        sub: [
            { title: "에버랜드", link: "#!" },
            { title: "캐리비안베이", link: "#!" },
            { title: "홈브리지", link: "#!" },
        ]
    },
    {
        id: 2, title: "리조트 내 시설",
        sub: [
            { title: "교통박물관", link: "#!" },
            { title: "호암박물관", link: "#!" },
            { title: "글렌로스 골프클럽", link: "#!" },
        ]
    },
    {
        id: 3, title: "패밀리 사이트",
        sub: [
            { title: "삼성물산 리조트부문", link: "#!" },
            { title: "골프 삼성", link: "#!" },
            { title: "삼성화재 안내견 학교", link: "#!" },
            { title: "서비스 아카데미", link: "#!" },

        ]
    },
]

const ServiceLink = () => {

    const [slink, setSlink] = useState();
    const [swc, setSwc] = useState(false);

    useEffect(() => {
        setSwc(true)
    }, [slink])

    return (
        <ul className='ServiceLink'>
            {
                SERVICE.map((link, idx) => {
                    return (
                        <li key={link.id}>
                            <div className={"title " + ((slink === idx && swc) ? 'on' : '')}
                                onClick={() => {
                                    setSlink(idx);
                                    setSwc(!swc);
                                }
                                }>{link.title}</div>
                            <ul className={"subLInk " + ((slink === idx && swc) ? 'on' : '')}>
                                {
                                    link.sub.map((sub, idx) => {
                                        return (
                                            <li key={idx}>{sub.title}</li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ServiceLink