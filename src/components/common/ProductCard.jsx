import React from 'react';
import { ShoppingBasket, Heart, Eye, Leaf, Scale } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-[#121212] border border-white/5 overflow-hidden transition-all duration-500 hover:border-green-600/50 shadow-xl rounded-3xl">
      
      {product.discount && (
        <div className="absolute top-4 left-4 z-20 bg-green-600 text-white text-[9px] font-black px-2 py-1 uppercase tracking-widest rounded-md">
          {product.discount}
        </div>
      )}

      <div className="relative aspect-square overflow-hidden bg-[#1a1a1a]">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
        
        <div className="absolute -right-12 group-hover:right-4 top-4 flex flex-col gap-2 transition-all duration-500">
          <button className="p-3 bg-white text-black hover:bg-green-600 hover:text-white transition-colors shadow-xl rounded-full">
            <Heart size={16} />
          </button>
          <button className="p-3 bg-white text-black hover:bg-green-600 hover:text-white transition-colors shadow-xl rounded-full">
            <Eye size={16} />
          </button>
        </div>

        <button className="absolute bottom-0 left-0 w-full bg-green-600 text-white py-4 font-black text-[10px] uppercase tracking-[0.2em] translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2">
          <ShoppingBasket size={14} /> Add to Basket
        </button>
      </div>

      <div className="p-5 space-y-2">
        <p className="text-green-500 text-[9px] font-bold uppercase tracking-widest flex items-center gap-1">
          <Leaf size={10} /> {product.category}
        </p>
        
        <h3 className="text-white font-black text-lg uppercase tracking-tight line-clamp-1 group-hover:text-green-500 transition-colors italic">
          {product.name}
        </h3>

        {/* ⚖️ PACK SIZE DISPLAY */}
        <div className="flex items-center gap-1.5 pt-1">
           <Scale size={12} className="text-slate-500" />
           <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-none">
              Pack: {product.sellingQty || '1'} {product.sellingUnit || 'kg'}
           </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <span className="text-white text-xl font-black italic tracking-tighter">
            ₹{product.price.toLocaleString()}
          </span>
          <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-green-600 transition-all" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;