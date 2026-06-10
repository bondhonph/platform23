
"use client";
import { useState } from "react";
import { menuData, categories } from "./menuData";

export default function Home(){
 const [item,setItem]=useState("");
 const all=Object.entries(menuData).flatMap(([c,items])=>items.map(i=>({...i,c}))).slice(0,12);
 return (
 <main style={{background:"#0b0b0b",color:"#fff",fontFamily:"sans-serif"}}>
  <section style={{padding:"100px 20px",textAlign:"center",background:"linear-gradient(180deg,#111,#000)"}}>
   <h1 style={{fontSize:"56px"}}>Platform 23</h1>
   <p>Eat, You'll Feel Better</p>
   <a href="#menu" style={{padding:"12px 20px",background:"#D4A017",color:"#000"}}>View Menu</a>
  </section>

  <section id="menu" style={{padding:"40px 20px"}}>
   <h2>Featured Items</h2>
   <div style={{display:"grid",gridTemplateColumns":"repeat(auto-fit,minmax(220px,1fr))",gap:"16px"}}>
   {all.map((m,i)=>(
    <div key={i} style={{background:"#161616",padding:"16px",borderRadius:"12px"}}>
      <h3>{m.name}</h3>
      <p>৳{m.price}</p>
      <button onClick={()=>{
        setItem(m.name);
        document.getElementById("order")?.scrollIntoView({behavior:"smooth"});
      }} style={{background:"#D4A017",border:0,padding:"10px 16px"}}>Order Now</button>
    </div>
   ))}
   </div>
  </section>

  <section id="gallery" style={{padding:"40px 20px"}}>
   <h2>Gallery</h2>
   <p>Add your uploaded food photos inside public/gallery and show them here.</p>
  </section>

  <section id="order" style={{padding:"40px 20px"}}>
   <h2>Order</h2>
   <input defaultValue={item} placeholder="Items" style={{width:"100%",padding:"12px"}}/>
   <p>WhatsApp: +8801772101429</p>
  </section>

  <a href="https://wa.me/8801772101429" style={{position:"fixed",right:"20px",bottom:"20px",background:"#25D366",padding:"14px 18px",borderRadius:"999px",color:"#fff",textDecoration:"none"}}>
   WhatsApp
  </a>
 </main>
 )
}
