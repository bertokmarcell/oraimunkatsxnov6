import Konyv from "./Konyv";
import { type KONYTYPE, } from "../assets/adatok";
import { useTablazatContext } from "../contexts/TablazatContext";

export default function Konyvek(){
    const{konyvlista}=useTablazatContext();
    return(
        <><div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th className="cim">cim</th>
                        <th>szerzo</th>
                        <th>ar</th>
                        <th>darabszam</th>
                        </tr>
                    </thead>
                
            
                <tbody>
                    {konyvlista.map((e,i)=>
                        {
                        return( <Konyv elem={e} key={i} />)
                        }
                        )
                        };
                </tbody>
                </table>
        </div>
        </>
    )
}