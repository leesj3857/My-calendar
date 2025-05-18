import React from 'react';

interface Schedule {
  id: string;
  title: string;
  description?: string;
  date: string;
}

interface ScheduleListProps {
  schedules: Schedule[];
  onDelete: (id: string) => void;
}

export default function ScheduleList({ schedules, onDelete }: ScheduleListProps) {
  if (!schedules || schedules.length === 0) {
    return <li className="text-gray-400 text-center">등록된 일정이 없습니다.</li>;
  }
  return (
    <ul className="space-y-4">
      {schedules.map((s) => (
        <li
          key={s.id}
          className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-blue-100 border border-indigo-100 rounded-xl px-6 py-4 shadow hover:shadow-lg transition"
        >
          <div>
            <div className="font-bold text-lg text-indigo-700">{s.title}</div>
            <div className="text-gray-500 text-sm">{s.description}</div>
            <div className="text-indigo-400 text-xs mt-1">{s.date}</div>
          </div>
          <button
            onClick={() => onDelete(s.id)}
            className="ml-4 bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold shadow transition"
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}
