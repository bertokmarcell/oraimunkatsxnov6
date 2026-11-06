import React, { useState } from "react"
import { useTablazatContext, type UJKONYVTYPE } from "../contexts/TablazatContext";

//
function ujkonyv(){
    const { Konyhozzaadas} = useTablazatContext();
    const [cim,setcim] =useState<string>("");
    const [szerzo,setszerzo] =useState<string>("");
    const [ar,setar] =useState<number>(0);
    const [darabszam,setdarabszam] =useState<number>(0);
    function mentes(e:React.FormEvent<HTMLAnchorElement>){
    e.preventDefault();
    const newkonyv :UJKONYVTYPE={cim,szerzo,ar,darabszam};
    }   

    Konyhozzaadas(newkonyv);
    setar(0);
    setcim("");
    setdarabszam(0);
    setszerzo("");

    return(
        <section className="uj-konyv">
            <h2>new book upload</h2>
    <form onsubmit={mentes}>
    <div className="form-mezo">
        <label htmlFor="cim">konyvcim</label>
        <input 
        type="text"
        name="cim"
        value={cim} 
        onChange={(event)=>setcim(event.target.value)}
        id="cim" />
    </div>
    <div className="form-mezo">
        <label htmlFor="szerzo">szerzo</label>
        <input 
        type="text" 
        name="szerzo"
        value={szerzo} 
        onChange={(event)=>setszerzo(event.target.value)} 
        id="cim" />
    </div>
    <div className="form-mezo">
        <label htmlFor="ar">kony_ar</label>
        <input 
        type="number"
        name="ar" 
        value={ar} 
        onChange={(event)=>setar(Number(event.target.value))}
        id="ar" />
    </div>
    <div className="form-mezo">
        <label htmlFor="darabszam">konyv_mennyiseg</label>
        <input 
        type="number" 
        name="darabszam"
        value={darabszam} 
        onChange={(event)=>setdarabszam(Number(event.target.value))} 
        id="darabszam" />
    </div>
    <div>
        <button type="submit"></button>
    </div>
    </form>
    </section>
    )
}




//<label for="" id="ph1"></label>
 //       <input type="text" id="cim" name="cim" value="cim">
//
  ////    <input type="text" id="szerzo" name="szerzo" value="szerzo">
//
  //      <label for="" id="ph3"></label>
    //    <input type="" id="ar" name="ar" value="ar">
//
  //      <label for="" id="ph4"></label>
    //    <input type="text" id="cim" name="cim" value="cim">
//
  //      <label for="" id="ph4"></label>
    //    <input type="text" id="cim" name="cim" value="cim"></input>
