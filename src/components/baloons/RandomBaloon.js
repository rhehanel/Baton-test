import { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import BasicBaloon from "./BasicBaloon";
import BearBaloon from "./BearBaloon";
import FlowerBaloon from "./FlowerBaloon";
import HeartBaloon from "./HeartBaloon";

const RandomBaloon = () => {
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
    }, [])

    const sizeMax = 160;
    const sizeMin = 130;
    const size = sizeMin + Math.random() * (sizeMax - sizeMin);
    const windowHalfH = dimensions.height / 2;
    const windowHalfW = dimensions.width / 2;

    const a = -0.6 * Math.PI * Math.random() - 0.6;
    const yr = Math.random() * dimensions.height * windowHalfH;
    const xr = Math.random() * (windowHalfW + 300) * (windowHalfW + 300);
    const x = Math.sqrt(xr) * Math.cos(a) + windowHalfW - (size / 2);
    const y = Math.sqrt(yr) * Math.sin(a) + windowHalfH;
    
    const deg = -70 + (Math.floor(x / windowHalfW * 70)) + (Math.floor(Math.random() * (20 - -20)) -20);
    let movedDeg = deg;

    if ( x > windowHalfW ) {
        movedDeg = movedDeg - Math.floor(Math.random() * 10);
    } else {
        movedDeg = movedDeg + Math.floor(Math.random() * 10);
    }

    const rotateKeyframes = {
        '0%': { transform: `rotate(${deg}deg)` }, 
        '50%': { transform: `rotate(${movedDeg}deg)` }, 
        '100%': { transform: `rotate(${deg}deg)` }, 
    }

    const styles = StyleSheet.create({
        baloonStyle: {
            position: "absolute",
            top: y,
            left: x,
            width: size,
            animationName: rotateKeyframes,
            animationDuration: '5s, 1200ms',
            animationIterationCount: 'infinite',
        },
    })

    const arr = [<BasicBaloon/>, <BearBaloon/>, <FlowerBaloon/>, <HeartBaloon/> ];
    let randomComp = Math.random() * 100;
    if (randomComp < 80) {
        randomComp = 0;
    } else if (randomComp < 85 ) {
        randomComp = 1;
    } else if (randomComp < 90) {
        randomComp = 2;
    } else if (randomComp < 95) {
        randomComp = 3;
    }

    const [visible, setVisible] = useState(true);
    const destroy = () => {
        setVisible((prev) => !prev);
    }

    return (
        visible && (
            <div className={`baloon ${css(styles.baloonStyle)}`} onClick={destroy}>
                {arr[randomComp]}
            </div>
        )
    )
}



export default RandomBaloon;