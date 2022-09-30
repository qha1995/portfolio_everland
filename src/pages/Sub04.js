import React from 'react';
import Article04 from './Article04';
import Aside from './Aside';
import '../Subpage.scss'
const Sub04 = ({ content }) => {
    const num = 3;
    return (
        <div className='Subpage'>
            <div className="nav__bar">
                <div className="inner">{content[num].tit} / {content[3].tit}</div>
            </div>
            <div className="inner sub">
                <Article04 content={content} num={num} />
                <Aside />
            </div>
        </div>
    )
}
export default Sub04;