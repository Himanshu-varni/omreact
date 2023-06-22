import React, { useEffect, useState } from 'react';
import axios from "axios";


const ChooseOmtech = () => {

  const [data, setData]  = useState([])



  useEffect(()=>{
      axios
      .get(`http://localhost:1337/api/pages`)
      .then(({ data }) => {setData(data.data)
  })
  },[])

  console.log("data",  data)


return (
  <div>
      {
          data.map((item)=>(
              <ul key={item.id}>
                  <li>{item.attributes.title}</li>
              </ul>
          ))
      }
      </div>
      )
    }

export default ChooseOmtech