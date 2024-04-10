import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
     const data = useLoaderData()
     console.log(data);
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://apimedharva.softwaremathematics.com/role-service-mongo/api/role/v2/get')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data.data.dtoList[0]);
    //     setData(data?.data?.dtoList[0])
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.data.dtoList[0]?.name}
    
    <img src="https://w0.peakpx.com/wallpaper/564/224/HD-wallpaper-beautiful-girl-bengali-eyes-holi-indian.jpg" alt="image" width={300} />
    </div>
  )
}

 export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://apimedharva.softwaremathematics.com/role-service-mongo/api/role/v2/get')
    return response.json()
}