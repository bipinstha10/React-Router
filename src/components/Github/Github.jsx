// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


function Github() {
  const data = useLoaderData()
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/bipinstha10')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  // },[])
  return (
    <div className="m-4 flex item-center justify-center gap-x-16">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="avatar" />
    </div>
  )
}
export default Github

