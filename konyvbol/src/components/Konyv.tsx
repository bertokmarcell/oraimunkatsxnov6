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
    <td>{elem.id}</td>
    <td>{elem.cim}</td>
    <td>{elem.szerzo}</td>
    <td>{elem.ar}</td>
    <td>{elem.darabszam}</td>
    <td><button onClick={() => torlol_item(elem.id)}>torles</button></td>
    
    </tr>
    )
    
}