import React, { useEffect, useRef } from 'react'
import { Player } from '@lordicon/react';
import { IoIosArrowDown } from "react-icons/io";
import './sectionone.css';
import { Link } from 'react-router-dom';
const ICON = require('../../../assets/jsonicons/heart.json');
const ICON2 = require('../../../assets/jsonicons/camera.json');
const ICON3 = require('../../../assets/jsonicons/location.json');

export default function SectionOne() {

    const playerRef1 = useRef<Player>(null);
    const playerRef2 = useRef<Player>(null);
    const playerRef3 = useRef<Player>(null);

    useEffect(() => {
        if (playerRef1.current && playerRef2.current && playerRef3.current) {
            playerRef1.current.playFromBeginning();
            playerRef2.current.playFromBeginning();
            playerRef3.current.playFromBeginning();
        }
    }, []);

    const handleComplete = (playerRef: React.MutableRefObject<Player | null>) => {
        if (playerRef.current) {
            playerRef.current.playFromBeginning();
        }
    };

    return (
        <div className="contentsectio1">
            <div className="contentsectio1-webkit">
                <div className="textlogo">
                    <span className='logojanonese'>
                        夢
                    </span>
                </div>
                <div className="heigthspacing"></div>
                <div className="titles">
                    <h1 className="title">YUMES</h1>
                    <span>Japón pasado & presente  </span>
                </div>
                <div className="heigthspacing"></div>
                <div className="icons">
                    <div className="icono iconone">
                        <Player
                            ref={playerRef1}
                            icon={ICON}
                            onComplete={() => handleComplete(playerRef1)}
                        />
                    </div>
                    <div className="icono icontwo">
                        <Player
                            ref={playerRef2}
                            icon={ICON2}
                            onComplete={() => handleComplete(playerRef2)}
                        />
                    </div>
                    <div className="icono iconthree">
                        <Player
                            ref={playerRef3}
                            icon={ICON3}
                            onComplete={() => handleComplete(playerRef3)}
                        />
                    </div>
                </div>
                <div className="heigthspacing"></div>
                <div className="spantext">
                    <span>¡El principal especialista en viajes a medida al País del Sol Naciente!</span>
                </div>
                <div className="heigthspacing"></div>
                <div className="btnplan">
                    <Link to='/formulario.html' className='Link'>
                        <span>Planifica tu viaje ahora</span>
                    </Link>
                </div>
                <div className="heigthspacing"></div>
                <div className="iconarrow">
                    <IoIosArrowDown />
                </div>
            </div>
        </div>
    )
}
