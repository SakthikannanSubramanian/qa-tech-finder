const SubTitle=(props)=>{
    const style = {
        "color": "#FFFFFF",
        "font-size": "20px",
        "font-family": "Arial, Helvetica, sans-serif",
        "text-align":"center"
      };
    return(<p style={style}>{props.subTitle}</p>)
}
export default SubTitle;