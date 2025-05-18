import React from 'react';

interface ScheduleFormProps {
  value: { title: string; description: string; date: string };
  onChange: (value: { title: string; description: string; date: string }) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ScheduleForm({ value, onChange, onSubmit }: ScheduleFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-center"
    >
      <input
        className="flex-1 border-2 border-indigo-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        placeholder="제목"
        value={value.title}
        onChange={e => onChange({ ...value, title: e.target.value })}
        required
      />
      <input
        className="flex-1 border-2 border-indigo-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        placeholder="설명"
        value={value.description}
        onChange={e => onChange({ ...value, description: e.target.value })}
      />
      <input
        className="border-2 border-indigo-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        type="date"
        value={value.date}
        onChange={e => onChange({ ...value, date: e.target.value })}
        required
      />
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-6 py-2 rounded-lg shadow transition"
      >
        추가
      </button>
    </form>
  );
}
