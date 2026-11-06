import { createContext, useContext, useState, type ReactNode } from "react";
import { KONYVEKLISTAJA, type KONYTYPE  } from "../assets/adatok";
interface TABLAZATContextvalue{
    konyvlista:KONYTYPE[];
    torlol_item:(id:number)=>void;
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
    return(
        <TablazatContext.Provider value={{torlol_item, konyvlista}}>
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








