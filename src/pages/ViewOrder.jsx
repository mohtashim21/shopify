import React, { useEffect } from 'react'
import {useFirebase} from "../context/Firebase"

const ViewOrder = () => {

    const firebase = useFirebase();

    useEffect(() => {
        firebase.fetchMyOrdersMen();    
        firebase.fetchMyOrdersWomen();
    }, [])

  return (
    <div>ViewOrder</div>
  )
}

export default ViewOrder