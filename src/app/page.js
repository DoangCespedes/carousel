import  {Carousell}  from "@/app/components/Carousell";
import { Cardd } from "./components/Cardd";
import Tickets from "./components/carousel/Tickets";
import { Card } from "./components/carousel_2/Card";

export default function Home() {

  
  return (
    <>
      

      <h1 style={{textAlign:"center"}}>Carousel Multi-Item con Next.js</h1>
      {/* <div style={{width:"100%"}}>
        <Carousell />
      </div> */}
    
      {/* <Cardd/> */}

      <Tickets/>

      <h2 style={{textAlign:"center"}}>Segundo Carousel Multi-Item con Next.js</h2>
      
      <Card/>
    
    </>
  )
}
