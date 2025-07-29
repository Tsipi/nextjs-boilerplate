"use client";

import Link from "next/link";

export default function LandingPage() {
    return (
      <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold text-green-700 mb-6">🌱 CropLink</h1>
        <p className="text-lg max-w-xl mb-8 text-gray-700">
          CropLink is a simple, farmer-friendly marketplace that connects Israeli farmers directly
          with local buyers — no middlemen, no headaches. Easy to use, fully mobile, and coming soon in Hebrew.
        </p>
  
        <div className="flex gap-4 mb-10">
        <Link href="/farmers-marketplace/login" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold">
            Enter the App
        </Link>
          <a
            href="#learn-more"
            className="border border-green-600 text-green-700 px-6 py-3 rounded font-semibold hover:bg-green-100"
          >
            Learn More
          </a>
        </div>
  
        <section id="learn-more" className="bg-white rounded shadow p-6 max-w-2xl w-full mt-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">How It Works</h2>
          <ul className="text-left text-gray-700 space-y-2">
            <li>📱 Login with your phone number</li>
            <li>👨‍🌾 Choose if you're a Farmer or a Buyer</li>
            <li>🧺 Farmers list crops — name & quantity</li>
            <li>🛒 Buyers browse and contact farmers directly</li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            CropLink is designed with simplicity in mind — so you can focus on growing and selling.
          </p>
        </section>
      </div>
    );
  }