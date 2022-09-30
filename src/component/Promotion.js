import { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';

const Promotion = () => {
    const MOVIE = useRef();
    const [url, setUrl] = useState('sclnt73jEas');

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            // autohide: 1,
            // playsinline: 1,
            mute: 1,
            playlist: url,
        },

    };



    return (
        <section className="Promotion csc">
            <h2>홍보영상</h2>
            <p>매일매일이 즐거워~ 에버랜드 이야기</p>
            <div className="container">
                <div className='movie' ref={MOVIE} id='player' >
                    <YouTube videoId={url} opts={opts} className='u' />
                </div>


                <div className="des">
                    <div className='left' onClick={() => setUrl('sclnt73jEas')}>
                        <h3>할로윈 퍼레이드 <span></span></h3>
                        <p>할로 할로</p>
                    </div>
                    <button>
                        <i className='xi-arrow-top'></i>
                    </button>
                    <div className='right' onClick={() => setUrl('GYpPr1cQ_lU')}>
                        <h3>에버랜드 달콤살벌 <span></span></h3>
                        <p>Trick or Treat</p>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Promotion;