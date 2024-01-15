import React, { useEffect, useState } from 'react'

function useLocalstorge(storagename) {
    const [data, setData] = useState(localStorage.getItem(storagename) ? JSON.parse(localStorage.getItem(storagename)) : [])
    useEffect(() => {
      localStorage.setItem(storagename,JSON.stringify(data))
    }, [data])
    
    
  return [data ,setData]
}

export default useLocalstorge