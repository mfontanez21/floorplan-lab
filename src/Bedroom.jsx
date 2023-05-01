

const Bedroom = (props) =>{
  console.log(props);
  return(
    <>
      <div>Bedroom {props.bedNum + 1}</div>
      <div>Bedroom {props.bedNum + 2}</div>
      <div>Bedroom {props.bedNum + 3}</div>
    </>
  )
}

export default Bedroom