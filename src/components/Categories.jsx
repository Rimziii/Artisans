import React from "react";

const categories = [
  "Crochet & Soft Toys",
  "Paintings",
  "Wooden Crafts",
  "Traditional Jewelry",
  "Textiles & Weaves",
  "Home Decor",
];

export default function Categories() {
  return (
    <section>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
        <h3 style={{margin:0}}>Categories</h3>
        <a href="#" style={{color:'var(--muted)',fontSize:13}}>See all</a>
      </div>
      <div className="categories">
        {categories.map((c) => (
          <div key={c} className="category">{c}</div>
        ))}
      </div>
    </section>
  );
}
