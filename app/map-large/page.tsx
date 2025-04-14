'use client';

import { useRef, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { categories } from '../data/companies';
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided, DroppableStateSnapshot, DraggableStateSnapshot } from '@hello-pangea/dnd';

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
      className="w-[40px] h-[40px] p-2"
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

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

// EditableText component for inline editing
function EditableText({ value, onChange, className = "" }: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (text !== value) {
      onChange(text);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      inputRef.current?.blur();
    }
    if (e.key === 'Escape') {
      setText(value);
      setIsEditing(false);
    }
  };

  return isEditing ? (
    <input
      ref={inputRef}
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`bg-transparent outline-none border-b-2 border-blue-500 px-1 ${className}`}
      autoFocus
    />
  ) : (
    <span
      onDoubleClick={handleDoubleClick}
      className={`cursor-text ${className}`}
      title="Double click to edit"
    >
      {value}
    </span>
  );
}

interface Company {
  id: string;
  name: string;
}

interface Category {
  name: string;
  count: number;
  companies: Company[];
}

export default function MapLargePage() {
  const [mainTitle, setMainTitle] = useState("Israeli Fintech Companies");
  const [subTitle, setSubTitle] = useState("Banking And Payments Landscape");
  const [categoryList, setCategoryList] = useState<Category[]>(categories);
  
  // Add new state for sidebar content
  const [sidebarTitle, setSidebarTitle] = useState("Innovation Hub");
  const [sidebarSubtitle, setSidebarSubtitle] = useState("Transforming Financial Technology");
  const [sidebarText, setSidebarText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );

  const handlePrint = () => {
    window.print();
  };

  const updateCategoryTitle = (index: number, newTitle: string) => {
    const newCategories = [...categoryList];
    newCategories[index] = {
      ...newCategories[index],
      name: newTitle,
    };
    setCategoryList(newCategories);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination, type } = result;

    if (type === 'category') {
      const reorderedCategories = Array.from(categoryList);
      const [removed] = reorderedCategories.splice(source.index, 1);
      reorderedCategories.splice(destination.index, 0, removed);
      setCategoryList(reorderedCategories);
      return;
    }

    if (type === 'company') {
      const newCategories = [...categoryList];
      const sourceCategory = newCategories[parseInt(source.droppableId)];
      const destCategory = newCategories[parseInt(destination.droppableId)];

      if (source.droppableId === destination.droppableId) {
        const companies = Array.from(sourceCategory.companies);
        const [removed] = companies.splice(source.index, 1);
        companies.splice(destination.index, 0, removed);

        newCategories[parseInt(source.droppableId)] = {
          ...sourceCategory,
          companies,
          count: companies.length
        };
      } else {
        const sourceCompanies = Array.from(sourceCategory.companies);
        const destCompanies = Array.from(destCategory.companies);
        const [moved] = sourceCompanies.splice(source.index, 1);
        destCompanies.splice(destination.index, 0, moved);

        newCategories[parseInt(source.droppableId)] = {
          ...sourceCategory,
          companies: sourceCompanies,
          count: sourceCompanies.length
        };
        newCategories[parseInt(destination.droppableId)] = {
          ...destCategory,
          companies: destCompanies,
          count: destCompanies.length
        };
      }

      setCategoryList(newCategories);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f7fa] p-8 print:p-0 print:bg-white">
      <div className="printable-content">
        {/* Header */}
        <header className="max-w-[1920px] mx-auto mb-8 bg-[#b6cfdb] rounded-xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#1a2b3b] mb-2">
                <EditableText
                  value={mainTitle}
                  onChange={setMainTitle}
                  className="text-4xl font-bold text-[#1a2b3b]"
                />
              </h1>
              <h2 className="text-xl text-gray-600">
                <EditableText
                  value={subTitle}
                  onChange={setSubTitle}
                  className="text-xl text-gray-600"
                />
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[80px] font-bold text-[#E8EFF3]">2025</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-[1920px] mx-auto flex gap-8">
          {/* Left Sidebar */}
          <div className="w-72 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1a2b3b] mb-2">
                <EditableText
                  value={sidebarTitle}
                  onChange={setSidebarTitle}
                  className="text-2xl font-bold text-[#1a2b3b]"
                />
              </h2>
              <h3 className="text-base text-gray-600 mb-4">
                <EditableText
                  value={sidebarSubtitle}
                  onChange={setSidebarSubtitle}
                  className="text-base text-gray-600"
                />
              </h3>
              <div className="text-sm text-gray-600 mb-6 leading-relaxed">
                <EditableText
                  value={sidebarText}
                  onChange={setSidebarText}
                  className="text-sm text-gray-600 leading-relaxed"
                />
              </div>
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
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="categories" type="category" direction="vertical">
              {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                <div 
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex-1 grid grid-cols-3 gap-4"
                >
                  {categoryList.map((category, index) => (
                    <Draggable
                      key={category.name}
                      draggableId={category.name}
                      index={index}
                    >
                      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`bg-white rounded-xl p-3 shadow-sm transition-shadow ${
                            snapshot.isDragging ? 'shadow-lg ring-2 ring-blue-500 ring-opacity-50' : ''
                          }`}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-base font-semibold">
                              <EditableText
                                value={category.name}
                                onChange={(newTitle) => updateCategoryTitle(index, newTitle)}
                                className="text-base font-semibold"
                              />
                            </h3>
                            <span className="bg-[#9ab7a0]/80 text-white px-2 py-0.5 rounded-full text-xs">
                              {category.count}
                            </span>
                          </div>
                          <Droppable
                            droppableId={`${index}`}
                            type="company"
                            direction="horizontal"
                          >
                            {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={`flex flex-wrap gap-1.5 min-h-[40px] p-2 rounded-lg transition-colors ${
                                  snapshot.isDraggingOver ? 'bg-blue-50' : ''
                                }`}
                              >
                                {category.companies.map((company, companyIndex) => (
                                  <Draggable
                                    key={company.id}
                                    draggableId={company.id}
                                    index={companyIndex}
                                  >
                                    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          ...provided.draggableProps.style,
                                        }}
                                        className={`w-[40px] h-[40px] bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-all cursor-move group relative ${
                                          snapshot.isDragging ? 'shadow-lg ring-2 ring-blue-500 ring-opacity-50 scale-105 z-50' : ''
                                        }`}
                                      >
                                        <div className="relative w-full h-full flex items-center justify-center">
                                          <GlobeIcon color={stringToColor(company.name)} />
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-lg z-10">
                                          <span className="text-[10px] font-medium text-gray-800 px-1 text-center">
                                            {company.name}
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-[1920px] mx-auto mt-8 flex items-center justify-between">
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
        <div className="flex items-center gap-4">
          <Link 
            href="/map"
            className="bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors flex items-center gap-2 print:hidden"
          >
            <span>Switch to Normal Mode</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
          </Link>
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
        </div>
      </footer>

      <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 1mm 5mm;
          }
          
          html, body {
            width: 297mm;
            height: 210mm;
            margin: 0;
            padding: 0;
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
            height: calc(100% - 10px);
            background: white;
            transform: scale(0.99);
            transform-origin: top center;
            padding: 0.5mm 4mm !important;
          }

          /* Maintain grid structure */
          .grid {
            display: grid !important;
          }

          .grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }

          /* Adjust spacing for print */
          .p-8 {
            padding: 3mm !important;
          }

          .gap-8 {
            gap: 3mm !important;
          }

          .gap-4 {
            gap: 2mm !important;
          }

          .p-3 {
            padding: 1.5mm !important;
          }

          .gap-1\\.5 {
            gap: 1.5mm !important;
          }

          .mb-8 {
            margin-bottom: 0.5mm !important;
          }

          .mb-2 {
            margin-bottom: 0.5mm !important;
          }

          /* Adjust icon sizes for print */
          .w-[40px] {
            width: 38px !important;
            height: 38px !important;
          }

          .h-[40px] {
            width: 38px !important;
            height: 38px !important;
          }

          /* Adjust the SVG icon size */
          .w-[40px].h-[40px].p-2 {
            width: 38px !important;
            height: 38px !important;
            padding: 2.5px !important;
          }

          /* Adjust the flex container for 5 icons per row */
          .flex.flex-wrap.gap-1\\.5 {
            gap: 2mm !important;
            display: grid !important;
            grid-template-columns: repeat(5, 1fr) !important;
            padding: 2mm 2mm 0.5mm 2mm !important;
          }

          /* Ensure icons maintain their shape */
          .flex.items-center.justify-center {
            width: 38px !important;
            height: 38px !important;
          }

          /* Adjust the hover text size */
          .text-[10px] {
            font-size: 10px !important;
            font-weight: 500 !important;
          }

          /* Adjust category card padding */
          .bg-white.rounded-xl.p-3 {
            padding: 2mm 2mm 1mm 2mm !important;
          }

          /* Adjust footer */
          footer {
            position: fixed !important;
            bottom: 1mm !important;
            left: 5mm !important;
            right: 5mm !important;
            padding: 0 !important;
            margin: 0 !important;
            background: white !important;
          }

          /* Adjust max width container */
          .max-w-\\[1920px\\] {
            max-width: none !important;
            width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }

          /* Adjust sidebar width */
          .w-72 {
            width: 14rem !important;
          }

          /* Adjust logo containers in sidebar */
          .w-32.h-10 {
            width: 10rem !important;
            height: 3rem !important;
            padding: 0.3rem !important;
          }

          /* Adjust partner section spacing */
          .space-y-4 {
            margin-top: 2mm !important;
          }

          .space-y-4 > div {
            margin-top: 2mm !important;
            display: flex !important;
            align-items: center !important;
            gap: 2mm !important;
          }

          /* Adjust partner text */
          .space-y-4 h4 {
            font-size: 1rem !important;
            line-height: 1.35rem !important;
            font-weight: 500 !important;
          }

          .space-y-4 p {
            font-size: 0.9rem !important;
            line-height: 1.25rem !important;
          }

          /* Ensure proper logo display */
          .object-contain {
            object-fit: contain !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }

          /* Adjust header margins and padding for print */
          header.mb-8 {
            margin-bottom: 0.5mm !important;
          }

          header.p-6 {
            padding: 0 4mm !important;
          }

          /* Adjust header text margins */
          header .mb-2 {
            margin-bottom: 1mm !important;
          }

          /* Adjust year size in header */
          .text-[80px] {
            font-size: 65px !important;
          }

          /* Adjust main content padding */
          .flex.gap-8 {
            padding-top: 0.5mm !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </div>
  );
} 