import {type KONYTYPE } from "../assets/adatok";
import { useTablazatContext } from "../contexts/TablazatContext";
import './Konyvek.css'
interface KONYVPROPSType{
    elem:KONYTYPE;
    //index:number;
}
// onClick={()=>torol_item(elem.id)}
export default function Konyv({elem}:KONYVPROPSType){
    const {torlol_item} = useTablazatContext();
    
    return(
        //th fejlec | td tablatest fejlechez <thead> testbez <tbody>
    <tr>
    <td className="td">{elem.id}</td>
    <td className="td">{elem.cim}</td>
    <td className="td">{elem.szerzo}</td>
    <td className="td">{elem.ar}</td>
    <td className="td">{elem.darabszam}</td>
    <td className="td"><button onClick={() => torlol_item(elem.id)}>torles</button></td>
    
    </tr>
    )
    
}