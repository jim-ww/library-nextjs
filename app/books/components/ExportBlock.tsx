import type { Book } from '@/app/lib/definitions';
import { filterBooksByDates } from '@/app/lib/util/bookFilter';
import DatePicker from '@/components/DatePicker';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

export default function ExportBlock({ books }: Readonly<{ books: Book[] }>) {
  const [startDate, setStartDate] = useState(
    `${new Date().getFullYear()}-01-01`
  );
  const [endDate, setEndDate] = useState(
    `${new Date().getFullYear() + 1}-12-31`
  );

  const handleExportBooks = () => {
    const filteredBooks = filterBooksByDates(books, startDate, endDate);
    // TODO create CSV file, redirect to download link
  };

  return (
    <div className="flex gap-12 items-center">
      <div className="flex gap-8 items-center">
        <DatePicker
          title={'Start Date'}
          date={startDate}
          setDate={setStartDate}
        />
        <DatePicker title={'End Date'} date={endDate} setDate={setEndDate} />
      </div>
      <button
        className="text-blue-950 font-medium flex gap-2 text-nowrap rounded-md items-center "
        onClick={handleExportBooks}
      >
        <ArrowDownTrayIcon className="size-5" />
        <span>EXPORT TO CSV</span>
      </button>
    </div>
  );
}
