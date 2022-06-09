import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SimpleDate from '../components/simpleDate.js'
import ChartComponent from '../components/test.js'
import {useState, useEffect} from 'react'
import { getAllUsers } from '../services/UserService.js'


export default function Home() {

let [d, setd] = useState(null);
let [apiData, setApiData] = useState(null);

  useEffect(() => {
    console.log("state of d: " , d);
  });

  useEffect(() => {
    const fetchData = async () => {
      const api = await getAllUsers(d);

      setApiData(api);

      console.log(String(JSON.stringify(api)))
      let output = document.getElementById('output');
      output.innerHTML = `you selected ${String(JSON.stringify(api))}`;


    };
    fetchData();
  }, [d]);


function setData(arg) {
  setd(arg);
}

  return (
    <>
    <SimpleDate callback={setData} /> 
    <ChartComponent data={apiData}/>
    <div id='output'>No Date</div>
    </>
  )
}
