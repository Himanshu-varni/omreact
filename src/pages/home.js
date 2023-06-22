import React from 'react'
import ChooseOmtech from '../components/ChooseOmtech/chooseOmtech'
import Consteffective from '../components/CostEffective/costEffective';
import Different from '../components/Different/different';
import axios from "axios";
import { useState ,useEffect} from 'react';

const Home = () => {

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
        <ChooseOmtech/>
        <Consteffective/>
        <Different/>

        


    </div>
  )
}

export default Home