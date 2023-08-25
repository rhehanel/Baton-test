import { ReactComponent as Img } from '../../assets/basic.svg';

const BasicBaloon = () => {
    const innerColors = ["#ff3e39", "#ffdd22", "#ff93aa", "#6b66be", "#FFFF33" ];
    const outerColors = ["#ff3e39", "#99dd33", "#ef5595", "#3311cc", "#ffbb11" ];
    const randomCol = Math.floor(Math.random() * innerColors.length);
  
    const highlight = {
      position: "absolute",
      top: 5,
      right: 20,
      width: '70%',
      height: '70%',
      display: "block",
      background: `radial-gradient(circle, ${innerColors[randomCol]} 10%, rgba(0,0,0,0) 70%)`,
      borderRadius: "50%",
    }
  
    return (
      <>
        <Img fill={outerColors[randomCol]} stroke="black">
        </Img>
        <span style={highlight}></span>
      </>
    )
}

export default BasicBaloon;