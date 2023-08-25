import Cloud from '../assets/cloud.png'

const Clouds = () => {
    const amount = 8;
    const clouds = [];
    [...Array(amount)].map((_, i) => clouds.push(
        <div className={"cloud cloud"+i} key={i}>
            <img src={Cloud} alt="cloud"/>
        </div>
    ));

    return (
        <div className='clouds'>
            {clouds}
        </div>
    )
}

export default Clouds;