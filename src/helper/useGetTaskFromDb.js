// useGetTaskFromDb.js

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTask } from '../Store/Slice/taskSlice';


const useGetTaskFromDb = async () => {
    // const [result,getResult]=useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      // API call to get all data
      let data = await fetch("http://localhost:5000/");
      data = await data.json();
    //   console.log(data)
      // Dispatch the action to update the store with the fetched data
      dispatch(setTask(data));
    //   getResult(result)
    //   return result
    } catch (error) {
      // Handle any errors
      console.error('Error fetching data:', error);
    }
  };
  
};

export default useGetTaskFromDb;
