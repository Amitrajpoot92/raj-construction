import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; 
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { 
  UploadCloud, X, Loader2, Tag, LayoutGrid, Star, Plus, Package, Leaf, Scale 
} from "lucide-react";

const AddProduct = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    category: "", 
    price: "", 
    description: "",
    section: "regular",
    stock: "", // Inventory Stock
    unit: "kg",
    sellingQty: "", // Pack Size (Quantity per Price)
    sellingUnit: "gm" // Pack Unit (Default gm)
  });
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [isAddingNew, setIsAddingNew] = useState(false);
  
  const [images, setImages] = useState([]); 
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);

  // Orgosaga Specific Cloudinary Config
  const CLOUD_NAME = "ddnzmeqmc"; 
  const UPLOAD_PRESET = "orgosaga";

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const q = query(collection(db, "categories"), orderBy("name", "asc"));
      const querySnapshot = await getDocs(q);
      const cats = querySnapshot.docs.map(doc => ({ id: doc.id, name: doc.data().name }));
      setCategories(cats);
    } catch (err) { console.error("Error fetching cats:", err); }
  };

  const deleteCategory = async (catId) => {
    if(window.confirm("Bhai, Category delete karne se products delete nahi honge. Continue?")) {
      try {
        await deleteDoc(doc(db, "categories", catId));
        fetchCategories();
      } catch (err) { alert("Error deleting category!"); }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category" && value === "ADD_NEW") {
      setIsAddingNew(true);
      setFormData({ ...formData, category: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setImages((prev) => [...prev, ...files]);
      const newPreviews = files.map(file => URL.createObjectURL(file));
      setPreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setPreviews(previews.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalCategory = isAddingNew ? newCategory.trim() : formData.category;
    
    if (images.length === 0) return alert("Bhai, kam se kam ek photo to dalo!");
    if (!finalCategory) return alert("Bhai, category zaruri hai!");
    if (!formData.sellingQty) return alert("Bhai, pack size quantity (g/kg) daalna zaruri hai!");

    setUploading(true);

    try {
      // 🚀 PARALLEL UPLOAD LOGIC (From Sports Site)
      const uploadPromises = images.map(async (imgFile) => {
        const data = new FormData();
        data.append("file", imgFile);
        data.append("upload_preset", UPLOAD_PRESET);
        
        const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
          method: "POST",
          body: data,
        });

        if (!res.ok) throw new Error("Cloudinary upload failed");
        
        const fileData = await res.json();
        return fileData.secure_url;
      });

      const imageUrls = await Promise.all(uploadPromises);

      if (isAddingNew && !categories.find(c => c.name === finalCategory)) {
        await addDoc(collection(db, "categories"), { name: finalCategory });
      }

      await addDoc(collection(db, "products"), {
        name: formData.name,
        category: finalCategory,
        price: Number(formData.price),
        stock: Number(formData.stock) || 0,
        unit: formData.unit,
        sellingQty: formData.sellingQty, 
        sellingUnit: formData.sellingUnit, 
        description: formData.description,
        section: formData.section, 
        imageUrls: imageUrls, 
        imageUrl: imageUrls[0], 
        createdAt: serverTimestamp(),
      });

      alert(`Success! ${formData.name} added to harvest list. 🌿`);
      
      setFormData({ 
        name: "", category: "", price: "", description: "", 
        section: "regular", stock: "", unit: "kg", 
        sellingQty: "", sellingUnit: "gm" 
      });
      setPreviews([]); 
      setImages([]); 
      setIsAddingNew(false); 
      setNewCategory("");
      fetchCategories();
    } catch (err) {
      console.error("Submission Error:", err);
      alert("Error: Upload process fail ho gaya!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 md:space-y-10 pb-20 px-4 font-sans">
      <div className="flex flex-col gap-1 mt-4 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 italic leading-none">
          Organic <span className="text-green-600">Harvest</span>
        </h1>
        <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">
          Orgosaga - Farm Management System
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
        <div className="lg:col-span-2 space-y-6 md:space-y-8 bg-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
          
          <div className="flex gap-2 p-1.5 bg-slate-50 rounded-2xl md:rounded-3xl">
            <button 
              type="button" 
              onClick={() => setFormData({...formData, section: 'regular'})}
              className={`flex-1 py-3 md:py-4 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all ${formData.section === 'regular' ? 'bg-slate-900 text-white shadow-lg scale-100' : 'text-slate-400 scale-95 opacity-70'}`}
            >
              <LayoutGrid size={14} className="md:w-4 md:h-4"/> Daily Fresh
            </button>
            <button 
              type="button" 
              onClick={() => setFormData({...formData, section: 'featured'})}
              className={`flex-1 py-3 md:py-4 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all ${formData.section === 'featured' ? 'bg-green-600 text-white shadow-lg scale-100' : 'text-slate-400 scale-95 opacity-70'}`}
            >
              <Star size={14} className="md:w-4 md:h-4"/> Seasonal Pick
            </button>
          </div>

          <div className="space-y-4 md:space-y-6">
            <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="PRODUCE NAME (e.g. Pure Honey)" required className="w-full bg-slate-50 p-4 md:p-5 rounded-xl md:rounded-2xl font-bold text-sm outline-none border-2 border-transparent focus:border-green-600/20 transition-all" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <input name="price" value={formData.price} onChange={handleChange} type="number" placeholder="PRICE (₹)" required className="w-full bg-slate-50 p-4 md:p-5 rounded-xl md:rounded-2xl font-bold text-sm outline-none border-2 border-transparent focus:border-green-600/20 transition-all" />
              
              <div className="flex bg-slate-50 rounded-xl md:rounded-2xl border-2 border-transparent focus-within:border-green-600/20 overflow-hidden">
                <div className="flex items-center pl-4 text-slate-400"><Scale size={16}/></div>
                <input name="sellingQty" value={formData.sellingQty} onChange={handleChange} type="number" placeholder="PACK SIZE (Quantity/Price)" required className="w-full bg-transparent p-4 md:p-5 font-bold text-sm outline-none" />
                <select name="sellingUnit" value={formData.sellingUnit} onChange={handleChange} className="bg-green-600 px-3 md:px-4 font-black text-[10px] uppercase outline-none text-white cursor-pointer">
                  <option value="gm" className="bg-white text-slate-900">Gm</option>
                  <option value="kg" className="bg-white text-slate-900">Kg</option>
                  <option value="ml" className="bg-white text-slate-900">Ml</option>
                  <option value="unit" className="bg-white text-slate-900">Unit</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex bg-slate-50 rounded-xl md:rounded-2xl border-2 border-transparent focus-within:border-green-600/20 overflow-hidden">
                <div className="flex items-center pl-4 text-slate-400"><Package size={16}/></div>
                <input name="stock" value={formData.stock} onChange={handleChange} type="number" placeholder="WAREHOUSE STOCK" required className="w-full bg-transparent p-4 md:p-5 font-bold text-sm outline-none" />
                <select name="unit" value={formData.unit} onChange={handleChange} className="bg-slate-200 px-3 md:px-4 font-black text-[10px] uppercase outline-none text-slate-700 cursor-pointer">
                  <option value="kg">KG</option>
                  <option value="gm">Gm</option>
                  <option value="unit">Unit</option>
                </select>
              </div>

              <div className="relative">
                {!isAddingNew ? (
                  <select name="category" value={formData.category} onChange={handleChange} required className="w-full bg-slate-50 p-4 md:p-5 rounded-xl md:rounded-2xl font-bold text-sm outline-none border-2 border-transparent focus:border-green-600/20 appearance-none cursor-pointer">
                    <option value="">SELECT CATEGORY</option>
                    {categories.map(cat => <option key={cat.id} value={cat.name}>{cat.name.toUpperCase()}</option>)}
                    <option value="ADD_NEW" className="text-green-600 font-black">+ ADD NEW</option>
                  </select>
                ) : (
                  <div className="relative">
                    <input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} type="text" placeholder="NEW CATEGORY" required className="w-full bg-green-50 p-4 md:p-5 rounded-xl md:rounded-2xl font-bold text-sm outline-none border-2 border-green-600/20" />
                    <button type="button" onClick={() => setIsAddingNew(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600 font-black text-[10px] p-2">✕</button>
                  </div>
                )}
              </div>
            </div>
            
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="NUTRITIONAL BENEFITS & PRODUCT DESCRIPTION" rows="4" className="w-full bg-slate-50 p-4 md:p-5 rounded-xl md:rounded-2xl font-bold text-sm outline-none border-2 border-transparent focus:border-green-600/20"></textarea>
          </div>

          <button type="submit" disabled={uploading} className="w-full bg-slate-950 text-white py-5 md:py-6 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-green-600 transition-all flex items-center justify-center gap-4 disabled:opacity-70 shadow-xl active:scale-95">
            {uploading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin" size={18} />
                <span>Deploying...</span>
              </div>
            ) : "Deploy to Store"}
          </button>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-5 md:p-6 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-sm">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
               <UploadCloud size={14}/> Produce Visuals
             </p>
             <div className="grid grid-cols-2 gap-3 md:gap-4">
                {previews.map((src, index) => (
                  <div key={index} className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden border border-slate-100 group">
                    <img src={src} alt="preview" className="w-full h-full object-cover" />
                    <button type="button" onClick={() => removeImage(index)} className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-100 transition-all shadow-lg">
                      <X size={12} />
                    </button>
                  </div>
                ))}
                <label className="aspect-square flex flex-col items-center justify-center gap-2 cursor-pointer border-2 border-dashed border-slate-200 rounded-xl md:rounded-2xl hover:bg-green-50 hover:border-green-600 transition-all group">
                  <Plus size={24} className="text-slate-300 group-hover:text-green-500" />
                  <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Add Pic</span>
                  <input type="file" onChange={handleImageChange} className="hidden" accept="image/*" multiple />
                </label>
             </div>
          </div>

          <div className="bg-slate-900 p-6 md:p-8 rounded-[2.5rem] text-white relative overflow-hidden">
             <div className="flex items-center gap-3 mb-4 relative z-10">
               <Leaf className="text-green-500" size={18} />
               <p className="text-[10px] font-black uppercase tracking-widest">Active Categories</p>
             </div>
             <div className="max-h-40 md:max-h-48 overflow-y-auto space-y-2 pr-2 custom-scrollbar relative z-10">
                {categories.length > 0 ? categories.map(cat => (
                  <div key={cat.id} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 group">
                    <span className="text-[10px] font-bold uppercase tracking-wider">{cat.name}</span>
                    <button type="button" onClick={() => deleteCategory(cat.id)} className="text-slate-500 hover:text-red-500 transition-colors p-1">
                      <X size={14}/>
                    </button>
                  </div>
                )) : <p className="text-[9px] text-slate-500 uppercase tracking-widest">No categories yet</p>}
             </div>
             <div className="absolute -bottom-10 -right-10 opacity-5">
                <Leaf size={150} />
             </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;