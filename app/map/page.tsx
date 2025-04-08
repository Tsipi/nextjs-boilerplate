'use client';

import { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { categories } from '../data/companies';

// Function to generate a color based on string
function stringToColor(str: string) {
  const colors = [
    '#4F46E5', // indigo
    '#7C3AED', // violet
    '#EC4899', // pink
    '#EF4444', // red
    '#F59E0B', // amber
    '#10B981', // emerald
    '#3B82F6', // blue
    '#8B5CF6', // purple
  ];
  const hash = str.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
  return colors[hash % colors.length];
}

// Globe Icon Component
function GlobeIcon({ color }: { color: string }) {
  return (
    <svg 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 16 16"
      className="w-[50px] h-[50px] p-2"
    >
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default function MapPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f0f7fa] p-8 print:p-0 print:bg-white">
      <div className="printable-content">
        {/* Header */}
        <header className="max-w-7xl mx-auto mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-[#1a2b3b] mb-2">
                Israeli Fintech Companies
              </h1>
              <h2 className="text-xl text-gray-600">
                Banking And Payments Landscape
              </h2>
            </div>
            <div className="flex items-center gap-4 print:hidden">
              <span className="text-[#8b98a5]">2025</span>
              <button className="bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors flex items-center gap-2">
                <span>OPEN IN FINDER</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto flex gap-8">
          {/* Left Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1a2b3b] mb-2">
                Innovation Hub
              </h2>
              <h3 className="text-lg text-gray-600 mb-4">
                Transforming Financial Technology
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-32 h-10 bg-white rounded-lg flex items-center justify-center px-3 border border-gray-100">
                    <Image 
                      src="/companies/startup-nation-central.svg" 
                      alt="Startup Nation Central" 
                      width={110} 
                      height={28}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Startup Nation Central</h4>
                    <p className="text-sm text-gray-600">Innovation Partner</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-10 bg-white rounded-lg flex items-center justify-center px-3 border border-gray-100">
                    <Image 
                      src="/companies/mongodb.png" 
                      alt="MongoDB" 
                      width={110} 
                      height={28}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Tech Alliance</h4>
                    <p className="text-sm text-gray-600">Strategic Partner</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-10 bg-white rounded-lg flex items-center justify-center px-3 border border-gray-100">
                    <Image 
                      src="/companies/vercel.svg" 
                      alt="Vercel" 
                      width={110} 
                      height={28}
                      className="object-contain w-full h-full invert"
                      priority
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Global Fintech</h4>
                    <p className="text-sm text-gray-600">Technology Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Categories */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <span className="bg-[#9ab7a0]/80 text-white px-2 py-0.5 rounded-full text-xs">
                    {category.count}
                  </span>
                </div>
                <div className="grid grid-cols-6 gap-3">
                  {category.companies.map((company) => (
                    <div 
                      key={company.id} 
                      className="w-[50px] h-[50px] bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer group relative"
                      title={company.name}
                    >
                      <div className="relative w-full h-full">
                        <GlobeIcon color={stringToColor(company.name)} />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-lg z-10">
                        <span className="text-xs font-medium text-gray-800 px-2 text-center">
                          {company.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-8 flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <div className="w-28 h-10">
            <Image 
              src="/companies/startup-nation-central.svg" 
              alt="Startup Nation Central" 
              width={84}
              height={28}
              className="object-contain w-full h-full"
            />
          </div>
          <span>Powered by Startup Nation Finder</span>
        </div>
        <button 
          type="button"
          onClick={handlePrint}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 print:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          <span>Export PDF</span>
        </button>
      </footer>

      <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 12mm;
          }
          
          html, body {
            width: 297mm;
            height: 210mm;
            margin: 0;
            padding: 0;
          }

          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .print\\:hidden {
            display: none !important;
          }

          .min-h-screen {
            min-height: 0 !important;
          }

          .printable-content {
            width: 100%;
            height: calc(100% - 60px);
            background: white;
            transform: scale(0.88);
            transform-origin: top center;
            padding-bottom: 40px !important;
          }

          /* Maintain grid structure */
          .grid {
            display: grid !important;
          }

          .grid-cols-1 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          /* Adjust spacing for print */
          .p-8 {
            padding: 0.5rem !important;
          }

          .gap-8 {
            gap: 0.75rem !important;
          }

          .gap-6 {
            gap: 0.75rem !important;
          }

          .mb-8 {
            margin-bottom: 0.75rem !important;
          }

          .p-6 {
            padding: 0.75rem !important;
          }

          .mt-8 {
            margin-top: 0 !important;
          }

          /* Adjust text sizes for print */
          .text-3xl {
            font-size: 1.5rem !important;
          }

          .text-xl {
            font-size: 1.125rem !important;
          }

          .text-lg {
            font-size: 1rem !important;
          }

          /* Ensure sidebar width is appropriate */
          .w-80 {
            width: 15rem !important;
          }

          /* Maintain company grid */
          .grid-cols-6 {
            grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
          }

          /* Adjust icon sizes */
          .w-\\[50px\\] {
            width: 32px !important;
          }

          .h-\\[50px\\] {
            height: 32px !important;
          }

          /* Adjust footer */
          footer {
            position: fixed !important;
            bottom: 12mm !important;
            left: 12mm !important;
            right: 12mm !important;
            padding: 0 !important;
            margin: 0 !important;
            background: white !important;
          }

          /* Adjust max width container */
          .max-w-7xl {
            max-width: none !important;
            width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }

          /* Reduce paragraph size */
          .text-sm {
            font-size: 0.75rem !important;
            line-height: 1.25 !important;
          }

          .leading-relaxed {
            line-height: 1.4 !important;
          }
        }
      `}</style>
    </div>
  );
} 