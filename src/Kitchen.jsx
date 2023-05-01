import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = () => {

  return(
    <>
    <div><h2>Kitchen</h2>
      <div>
        <Sink />
      </div>
      <div>
        <Oven />
      </div>
      </div>
    </>
  )
}


// Must export the component's function (or class)
export default Kitchen