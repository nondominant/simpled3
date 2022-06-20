import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SimpleDate from '../components/simpleDate.js'
import ChartComponent from '../components/test.js'
import {useState, useEffect, useRef} from 'react'
import { getAllUsers } from '../services/UserService.js'


export default function Home() {

//let [d, setd] = useState(null);
let [apiData, setApiData] = useState(null);
const chartRef = useRef();

async function setData(arg) {
  let api = await getAllUsers(arg);
  setApiData(api);
}

  return (
    <div className="home">
      <SimpleDate callback={setData} /> 
      <ChartComponent setRef={chartRef} data={apiData}/>
      <div id='output'>No Date</div>
    </div>
  )
}
