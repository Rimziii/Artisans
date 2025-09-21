import React, { useState } from "react";

const products = [
  { id: 1, emoji: "🧶", title: "Handmade Crochet Basket", price: 15 },
  { id: 2, emoji: "🎨", title: "Watercolor Landscape", price: 40 },
  { id: 3, emoji: "💍", title: "Silver Tribal Necklace", price: 60 },
  { id: 4, emoji: "🏺", title: "Clay Pot with Design", price: 25 },
  { id: 5, emoji: "🪞", title: "Handcrafted Mirror Frame", price: 35 },
  { id: 6, emoji: "🏡", title: "Bamboo Lamp Shade", price: 30 }
];

export default function Explore() {
  const [search, setSearch] = useState("");
  const query = search.trim().toLowerCase();
  const matched = products.filter(p => p.title.toLowerCase().includes(query));
  const unmatched = products.filter(p => !p.title.toLowerCase().includes(query));
  const filtered = query ? [...matched, ...unmatched] : products;

  return (
    <div className="container" style={{maxWidth:1000,margin:"20px auto",padding:20}}>
      <div className="search-bar" style={{display:"flex",justifyContent:"center",marginBottom:20}}>
        <input
          type="text"
          placeholder="Search artisan products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width:"80%",
            padding:"10px 14px",
            borderRadius:8,
            border:"1px solid #ccc",
            fontSize:16
          }}
        />
      </div>
      <h2 style={{color:"#7b5cff",margin:"12px 0"}}>Discover</h2>
      <div className="feed" style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",
        gap:16
      }}>
        {filtered.map(p => (
          <div className="card" key={p.id} style={{
            background:"#fff",
            padding:12,
            borderRadius:10,
            border:"1px solid rgba(0,0,0,0.06)",
            boxShadow:"0 2px 5px rgba(0,0,0,0.08)",
            transition:"transform 0.2s"
          }}>
            <div className="thumb" style={{
              height:140,
              background:"#f3f3f3",
              borderRadius:8,
              marginBottom:8,
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              fontSize:40
            }}>{p.emoji}</div>
            <h4 style={{margin:"6px 0 2px",color:"#111"}}>{p.title}</h4>
            <div className="meta" style={{
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center",
              color:"#666",
              fontSize:14
            }}>
              <span>${p.price}</span>
              <button className="small-btn" style={{
                padding:"6px 10px",
                borderRadius:6,
                background:"#7b5cff",
                border:"none",
                color:"#fff",
                cursor:"pointer"
              }}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
