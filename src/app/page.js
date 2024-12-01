'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [years, setYears] = useState([]);

  useEffect(() => {
    // Fetch vehicle makes from API
    const fetchVehicleMakes = async () => {
      try {
        const response = await fetch(
            'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
        );
        const data = await response.json();
        setVehicleMakes(data.Results || []);
      } catch (error) {
        console.error('Error fetching vehicle makes:', error);
      }
    };

    // Generate model years dynamically
    const currentYear = new Date().getFullYear();
    const yearsRange = Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i);
    setYears(yearsRange);

    fetchVehicleMakes();
  }, []);

  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6">
        <h1 className="text-3xl font-bold mb-6 text-black">Filter Vehicles</h1>
        <div className="mb-4 w-full max-w-sm">
          <label htmlFor="make" className="block text-sm font-medium text-gray-700">
            Select Vehicle Make
          </label>
          <select
              id="make"
              className="mt-1 block w-full border border-gray-300 rounded-md text-gray-700 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={selectedMake}
              onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value="">Select a make</option>
            {vehicleMakes.map((make) => (
                <option key={make.MakeId} value={make.MakeId}>
                  {make.MakeName}
                </option>
            ))}
          </select>
        </div>
        <div className="mb-4 w-full max-w-sm">
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">
            Select Model Year
          </label>
          <select
              id="year"
              className="mt-1 block w-full border border-gray-300 text-gray-700 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select a year</option>
            {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
            ))}
          </select>
        </div>

        {/* Next Button */}
        <Link
            href={selectedMake && selectedYear ? `/result/${selectedMake}/${selectedYear}` : '#'}
            className={`w-full max-w-sm text-center px-4 py-2 rounded-md shadow ${
                selectedMake && selectedYear
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          Next
        </Link>
      </div>
  );
};

export default HomePage;
