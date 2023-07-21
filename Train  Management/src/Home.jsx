import React from 'react'
import Navbar  from './Navbar'
import Hero from './Hero'
import Analyst from './Analyst';
import TrainBookingComponent from './TrainBookingComponent';
import TrainDetails from './TrainDetails';
function Home() {
  return (
   <div >
   <Navbar></Navbar>
   <br></br>
  <Hero></Hero>
  <br></br>
  <Analyst></Analyst>
  <br></br>
  <TrainBookingComponent></TrainBookingComponent>
  <br></br>
  <TrainDetails></TrainDetails>
</div>
  );
}
export default  Home;