import { useEffect, useState } from "react"

const FLINK = [
    { id: 0, name: "Family Link", link: "" },
    { id: 1, name: "삼성물산 리조트부문", link: "http://rnc.samsungcnt.com/" },
    { id: 2, name: "골프 삼성", link: "https://www.golfsamsung.com/web/plugins.do" },
    { id: 3, name: "삼성화재 안내견 학교", link: "https://www.guidedog.co.kr/" },
    { id: 4, name: "서비스 아카데미", link: "http://www.evercs.com/" },
]

const FamilyLink = () => {
    const [flnk, setflnk] = useState();

    useEffect(() => {
        flnk && window.open(flnk)
    }, [flnk])

    return (
        <select onChange={(e) => setflnk(e.target.value)}>
            {
                FLINK.map(link => <option value={link.link} key={link.id}>{link.name}</option>)
            }
        </select>
    )
}

export default FamilyLink;