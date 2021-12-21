import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { getHostApi } from './api/hosts';
import Table from '../components/Table';

const Home: NextPage = () => {
  const [keysData, setKeysData] = useState([]);
  const [valuesData, setValuesData] = useState([]);

  useEffect(() =>{
    (async () => {
      const response = await getHostApi();
      // let data: HostsData = {keys: [],values: []};       
      let keys = Object.keys(response[0]);
      setKeysData(keys);
      let values = response.map((item: {}) => Object.values(item));
      setValuesData(values || {});
    })()
  }, []);
  return (
    <div className="home">
      <h1>Host List</h1>
      <Table data={{keysData, valuesData}} />
    </div>
  )
}

export default Home;
