import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import { useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
  const data = {
    name: "Language World Acadmy",
  };


  const navigate = useNavigate()

  useEffect(() => {
      const token = localStorage.getItem('TOKEN')
      if (!token) {
          navigate('/signin')
      }
  }, [])



  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
