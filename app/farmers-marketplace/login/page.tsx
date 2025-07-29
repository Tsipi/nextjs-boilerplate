"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const DEFAULT_CROP_LIST = [
  { name: '🍅 Tomatoes' },
  { name: '🧅 Onions' },
  { name: '🥔 Potatoes' },
  { name: '🥕 Carrots' },
  { name: '🍎 Apples' },
  { name: '🍓 Strawberries' },
];

export default function Home() {
  const [phone, setPhone] = useState('');
  const [farmerName, setFarmerName] = useState('');
  const [buyerName, setBuyerName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'farmer' | 'buyer' | null>(null);
  const [cropData, setCropData] = useState<{ [key: string]: { amount: string; unit: string; emoji?: string; description?: string; dueDate?: string; farmerName?: string; farmerPhone?: string } }>({});
  const [customCropName, setCustomCropName] = useState('');
  const [cropList, setCropList] = useState(DEFAULT_CROP_LIST);
  const [openCrop, setOpenCrop] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [step, setStep] = useState<'phone' | 'userType' | 'name' | 'done'>('phone');

  useEffect(() => {
    const saved = localStorage.getItem('cropData');
    if (saved) setCropData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('cropData', JSON.stringify(cropData));
  }, [cropData]);

  const login = () => {
    if (step === 'phone' && phone.trim()) {
      setStep('userType');
    } else if (step === 'userType' && userType) {
      setStep('name');
    } else if (step === 'name') {
      if ((userType === 'farmer' && farmerName.trim()) || (userType === 'buyer' && buyerName.trim())) {
        setLoggedIn(true);
        setStep('done');
      }
    }
  };

  const handleCropChange = (crop: string, field: string, value: string) => {
    setCropData((prev) => ({
      ...prev,
      [crop]: {
        ...prev[crop],
        [field]: value,
        ...(userType === 'farmer' ? { farmerName, farmerPhone: phone } : {}),
      },
    }));
  };

  const addCustomCrop = () => {
    if (!customCropName.trim()) return;
    const formatted = customCropName.trim();
    setCropList((prev) => [...prev, { name: formatted }]);
    setCustomCropName('');
  };

  const filteredCrops = Object.entries(cropData)
    .filter(([name, v]) => v.amount && (!searchTerm || name.toLowerCase().includes(searchTerm.toLowerCase())));

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-6">
      <nav className="w-full max-w-4xl mb-4 flex justify-between items-center text-green-800">
        <h1 className="text-2xl font-bold">🌱 CropLink</h1>
        {loggedIn && userType && (
          <div className="flex gap-4">
            <button onClick={() => setUserType('farmer')} className={`px-4 py-1 rounded ${userType === 'farmer' ? 'bg-green-700 text-white' : 'bg-white border'}`}>Farmer</button>
            <button onClick={() => setUserType('buyer')} className={`px-4 py-1 rounded ${userType === 'buyer' ? 'bg-green-700 text-white' : 'bg-white border'}`}>Buyer</button>
          </div>
        )}
      </nav>

      {!loggedIn ? (
        step === 'phone' ? (
          <div className="bg-white p-6 rounded shadow w-full max-w-sm">
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 p-3 mb-4 rounded bg-white"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className="bg-green-600 hover:bg-green-700 text-white p-3 w-full rounded font-semibold" onClick={login}>
              Next
            </button>
          </div>
        ) : step === 'userType' ? (
          <div className="bg-white p-6 rounded shadow w-full max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-4">Who are you?</h2>
            <div className="flex justify-center gap-4 mb-4">
              <button onClick={() => setUserType('farmer')} className={`px-4 py-2 rounded ${userType === 'farmer' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>Farmer</button>
              <button onClick={() => setUserType('buyer')} className={`px-4 py-2 rounded ${userType === 'buyer' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>Buyer</button>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white p-3 w-full rounded font-semibold" onClick={login}>
              Continue
            </button>
          </div>
        ) : (
          <div className="bg-white p-6 rounded shadow w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4">Welcome! What's your name?</h2>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border p-2 mb-4 rounded bg-white"
              value={userType === 'farmer' ? farmerName : buyerName}
              onChange={(e) => userType === 'farmer' ? setFarmerName(e.target.value) : setBuyerName(e.target.value)}
            />
            <button className="bg-green-600 hover:bg-green-700 text-white p-3 w-full rounded font-semibold" onClick={login}>
              Continue
            </button>
          </div>
        )
      ) : userType === 'farmer' ? (
        <div className="bg-white p-6 rounded shadow w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Add Crops</h2>
          <input
            type="text"
            placeholder="Add a custom crop (e.g., Mangoes 🥭)"
            className="w-full border p-2 mb-4 rounded bg-white"
            value={customCropName}
            onChange={(e) => setCustomCropName(e.target.value)}
          />
          <button className="bg-gray-200 text-sm p-2 rounded mb-6 hover:bg-gray-300 w-full" onClick={addCustomCrop}>
            ➕ Add Custom Crop
          </button>
          {cropList.map((crop) => (
            <div key={crop.name} className="border rounded mb-3 bg-gray-100 shadow overflow-hidden transition-all duration-300">
              <button className="w-full text-left p-4 font-medium bg-gray-200 hover:bg-gray-300" onClick={() => setOpenCrop(openCrop === crop.name ? null : crop.name)}>
                {crop.name}
              </button>
              {openCrop === crop.name && (
                <div className="p-4 space-y-3">
                  <h3 className="text-sm font-semibold text-gray-700">Add your crop details</h3>
                  <input type="text" placeholder="Quantity" value={cropData[crop.name]?.amount || ''} onChange={(e) => handleCropChange(crop.name, 'amount', e.target.value)} className="w-full border p-2 rounded bg-white" />
                  <select value={cropData[crop.name]?.unit || 'kg'} onChange={(e) => handleCropChange(crop.name, 'unit', e.target.value)} className="w-full border p-2 rounded bg-white">
                    <option value="kg">kg</option>
                    <option value="tons">tons</option>
                  </select>
                  <input type="text" placeholder="Emoji (e.g., 🥭)" value={cropData[crop.name]?.emoji || ''} onChange={(e) => handleCropChange(crop.name, 'emoji', e.target.value)} className="w-full border p-2 rounded bg-white" />
                  <textarea placeholder="Crop description" value={cropData[crop.name]?.description || ''} onChange={(e) => handleCropChange(crop.name, 'description', e.target.value)} className="w-full border p-2 rounded bg-white" />
                  <input type="date" value={cropData[crop.name]?.dueDate || ''} onChange={(e) => handleCropChange(crop.name, 'dueDate', e.target.value)} className="w-full border p-2 rounded bg-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Available Crops</h2>
          <input type="text" placeholder="Search crops..." className="w-full border p-2 mb-4 rounded bg-white" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          {filteredCrops.length > 0 ? (
            filteredCrops.map(([name, { amount, unit, emoji, description, dueDate, farmerName, farmerPhone }]) => (
              <div key={name} className="border p-3 mb-2 rounded bg-gray-50">
                <div className="font-semibold">{emoji ? emoji + ' ' : ''}{name}</div>
                <div>{amount} {unit}</div>
                {description && <div className="text-sm text-gray-600">{description}</div>}
                {dueDate && <div className="text-sm text-gray-500">Due Date: {dueDate}</div>}
                {farmerName && (
                  <div className="text-sm text-blue-700 mt-2">👤 {farmerName} — 📞 {farmerPhone}</div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No crops listed.</p>
          )}
        </div>
      )}
    </div>
  );
}