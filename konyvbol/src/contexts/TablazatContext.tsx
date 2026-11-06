import { createContext, useContext, useState, type ReactNode } from "react";
import { KONYVEKLISTAJA, type KONYTYPE  } from "../assets/adatok";
export type UJKONYVTYPE = Omit<KONYTYPE,"id">;
interface TABLAZATContextvalue{
    konyvlista:KONYTYPE[];
    torlol_item:(id:number)=>void;
    Konyhozzaadas:(konyv:UJKONYVTYPE)=>void;
}
export const TablazatContext = createContext<TABLAZATContextvalue | undefined>(undefined)
interface TablazatProvideProps{
    children:ReactNode;
}
export function TablazatProvider({children}:TablazatProvideProps){
    const [konyvlista,setTablazat]=useState<KONYTYPE[]>(KONYVEKLISTAJA)
    function torlol_item(id:number){
        console.log(id)
        setTablazat(elozolista => elozolista.filter(Konyv => Konyv.id !==id))
    }
    function Konyhozzaadas(Konyv:UJKONYVTYPE){
        setTablazat(pluszlista =>{ const ujid=Math.max(0, 
            ...pluszlista.map(k=>k.id))+1; 
            return [...pluszlista,{...Konyv,id:ujid}];
            //const newlist =[...konyvlista] ujlista.push({...konyv,id:ujid}) settablazat(ujlista)
    })
    }
    return(
        <TablazatContext.Provider value={{torlol_item, konyvlista, Konyhozzaadas}}>
            {children}
        </TablazatContext.Provider>
    )
}
export function useTablazatContext(){
    const constext = useContext(TablazatContext);
    if(constext===undefined){
        throw new Error(
            'Az appnal error van'
        );
    }
    return constext;
}








