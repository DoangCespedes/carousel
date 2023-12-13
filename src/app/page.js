import  {Carousell}  from "@/app/components/Carousell";
import { Cardd } from "./components/Cardd";
import Tickets from "./components/Tickets";

export default function Home() {

  
  return (
    <>
      

      <h1 style={{textAlign:"center"}}>Carousel Multi-Item con Next.js</h1>
      {/* <div style={{width:"100%"}}>
        <Carousell />
      </div> */}
    
      {/* <Cardd/> */}

      <Tickets/>
    
    </>
  )
}
