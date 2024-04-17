'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState, useEffect  } from 'react';
import Link from 'next/link';

export default function Page() {
  const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
  ]


  const [leadersValue,setLeadersValue]= useState(0) 
  const [employeesValue,setEmployeesValue]= useState(0) 
  const initialPersonal ={ leadersValue: 0, employeesValue: 0 };
  const totalPersons = leadersValue + employeesValue;

  useEffect(() => {
    // Funktion zum Berechnen der Gesamtzahl der Personen
    const totalPersons = leadersValue + employeesValue;

    // Initialisiere die Slider-Werte mit den Daten aus dem localStorage oder einem Standardwert
    setLeadersValue(initialPersonal.leadersValue);
    setEmployeesValue(initialPersonal.employeesValue);
  }, []);

    useEffect(() => {
      localStorage.setItem('personal', JSON.stringify({ leadersValue, employeesValue }));
    }, [leadersValue, employeesValue]);

    return (
      <>
   <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Wie viele Mitarbeiter sind Teil der Maßnahme?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum.
          </p>
        </div>

        <div className="mx-auto max-w-2xl flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4">Führungskräfte</h3>
            <Box sx={{ width: '80%' }}>
              <Slider
                defaultValue={initialPersonal.leadersValue}
                aria-label="Führungskräfte"
                valueLabelDisplay="auto"
                onChange={(event, value) => setLeadersValue(value as number)}
              />
            </Box>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4">Mitarbeiter</h3>
            <Box sx={{ width: '80%' }}>
              <Slider
                defaultValue={initialPersonal.employeesValue}
                aria-label="Mitarbeiter"
                valueLabelDisplay="auto"
                onChange={(event, value) => setEmployeesValue(value as number)}
              />
            </Box>
          </div>
          <p className="text-lg text-gray-600">
            Die geplante Maßnahme bezieht sich auf insgesamt {totalPersons} Personen.
          </p>
          <Link href="/dashboard/overview">
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4">
               Weiter
            </button>
          </Link>
        </div>
      </div>
    </div>
  
  </>
)
}