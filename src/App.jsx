// import { useEffect } from "react";
import "./App.css";
// import { fetchDataFromApi } from "./utils/api";
// import {useDispatch,useSelector} from 'react-redux'
// import { getApiConfiguration } from "./store/homeSlice";
import useFetch from "./hooks/useFetch";

function App() {
//  const data=useSelector(state=>state.home.url)
//  console.log("first",data)
//   const dispatch=useDispatch()
  
  

 const {data,isLoading}=useFetch("/movie/popular")
 console.log('custom hook',data, isLoading)
  // useEffect(() => {

  //   testApi();
  // }, []);

  // const testApi = () => {
  //   fetchDataFromApi("/movie/popular").then((res) => {
  //     dispatch(getApiConfiguration(res))
  //     console.log(res);
  //   });
  // };

  return <div className="App">App</div>;
}

export default App;
