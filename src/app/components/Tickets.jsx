import { FaBeer } from 'react-icons/fa';
import "./Style.css"

const Tickets = () => {
  return (
    <>
        <div className="contenedor_padre">
            <div className="contenedor_color" > <FaBeer /></div>
            <div className="contenedor_target">
                <div style={{}}>
                    <p><b>132425</b></p>
                    <p>Last week user</p>
                </div>
            </div> 
            <div style={{}}></div>
        </div>
    </>
  )
}

export default Tickets