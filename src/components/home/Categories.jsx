import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; 
import { collection, getDocs, query, orderBy, where, limit } from "firebase/firestore";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoriesWithImages = async () => {
      try {
        const catQuery = query(collection(db, "categories"), orderBy("name", "asc"));
        const catSnapshot = await getDocs(catQuery);
        const cats = catSnapshot.docs.map(doc => ({ id: doc.id, name: doc.data().name }));

        const categoryCards = await Promise.all(
          cats.map(async (cat) => {
            const productQuery = query(
              collection(db, "products"),
              where("category", "==", cat.name),
              limit(1)
            );
            const productSnapshot = await getDocs(productQuery);
            
            let displayImage = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd";

            if (!productSnapshot.empty) {
              displayImage = productSnapshot.docs[0].data().imageUrl;
            }

            return { ...cat, image: displayImage };
          })
        );

        setCategoriesData(categoryCards);
        setLoading(false);
      } catch (err) {
        console.error("Error:", err);
        setLoading(false);
      }
    };

    fetchCategoriesWithImages();
  }, []);

  const handleCategoryClick = (catName) => {
    navigate(`/products?search=${encodeURIComponent(catName)}`);
  };

  if (loading) return (
    <div className="py-20 flex flex-col items-center justify-center">
      <Loader2 className="animate-spin text-green-600" size={30} />
      <p className="text-[10px] font-black uppercase tracking-widest mt-4 text-slate-400 text-center italic">Scanning Fresh Harvest...</p>
    </div>
  );

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-green-600"></span>
              <span className="text-green-600 font-black tracking-[0.3em] uppercase text-[10px]">Natural Pantry</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 italic uppercase tracking-tighter">
              Explore by <span className="text-green-600">Variety</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-4">
             <p className="text-slate-400 text-sm font-medium italic">Click to view farm items →</p>
          </div>
        </div>

        <div className="relative group">
          <div 
            className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categoriesData.map((cat, index) => (
              <motion.div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.name)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[280px] md:min-w-[350px] snap-start relative group/card cursor-pointer"
              >
                <div className="relative h-[450px] overflow-hidden rounded-[2.5rem] bg-slate-100 transition-all duration-700 group-hover/card:shadow-2xl group-hover/card:-translate-y-2">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-all duration-1000 group-hover/card:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <span className="text-green-500 text-[10px] font-black uppercase tracking-[0.4em] mb-3 block translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500">
                      100% Organic
                    </span>
                    <h3 className="text-white text-4xl font-black italic uppercase tracking-tighter leading-none">{cat.name}</h3>
                    <div className="w-0 h-[3px] bg-green-600 mt-5 group-hover/card:w-full transition-all duration-700 shadow-[0_0_15px_rgba(22,163,74,0.5)]" />
                  </div>

                  <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transition-all translate-x-4 group-hover/card:translate-x-0">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Categories;