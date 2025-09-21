import React, { useState } from "react";
import ProductModal from "./ProductModal";

const products = [
  { id: 1, emoji: "🧶", thumb: "🧶 Crochet Basket", title: "Handmade Crochet Basket", price: 15 },
  { id: 2, emoji: "🎨", thumb: "🎨 Painting", title: "Watercolor Landscape", price: 40 },
  { id: 3, emoji: "💍", thumb: "💍 Jewelry", title: "Silver Tribal Necklace", price: 60 },
  { id: 4, emoji: "🏺", thumb: "🏺 Pottery", title: "Clay Pot with Design", price: 25 },
  { id: 5, emoji: "🪞", thumb: "🪞 Craft", title: "Handcrafted Mirror Frame", price: 35 },
  { id: 6, emoji: "🏡", thumb: "🏡 Home Decor", title: "Bamboo Lamp Shade", price: 30 },
];

export default function Discover({ search }) {
  const [selected, setSelected] = useState(null);
  let filtered = products;
  if (search && search.trim()) {
    const s = search.trim().toLowerCase();
    const matches = products.filter(
      p => p.title.toLowerCase().includes(s) || p.thumb.toLowerCase().includes(s)
    );
    const rest = products.filter(
      p => !matches.includes(p)
    );
    filtered = [...matches, ...rest];
  }
  return (
    <section>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
        <h3 style={{margin:0}}>Discover</h3>
        <div style={{color:'var(--muted)',fontSize:13}}>Scroll to explore latest artisan creations</div>
      </div>
      <div className="feed" id="feed" style={{columnCount:2,columnGap:18}}>
        {filtered.map((p) => (
          <div key={p.id} className="card" style={{breakInside:'avoid',marginBottom:18,cursor:'pointer'}} onClick={() => setSelected(p)}>
            <div className="thumb">{p.thumb}</div>
            <h4>{p.title}</h4>
            <div className="meta">
              <span>${p.price}</span>
              <button className="small-btn" onClick={e => {e.stopPropagation();setSelected(p);}}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
