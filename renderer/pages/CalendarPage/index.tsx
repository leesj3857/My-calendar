import { useQuery, useMutation } from 'graphql-mini';
import { useState } from 'react';
import ScheduleList from '../../features/schedule/ScheduleList';
import ScheduleForm from '../../features/schedule/ScheduleForm';
import { GET_SCHEDULES, CREATE_SCHEDULE, DELETE_SCHEDULE } from './utils/graphql';
import { formatDate } from './utils/scheduleUtils';

export default function CalendarPage() {
  const { data, loading, error, refetch } = useQuery(GET_SCHEDULES);
  const { execute: createSchedule } = useMutation(CREATE_SCHEDULE);
  const { execute: deleteSchedule } = useMutation(DELETE_SCHEDULE);
  const [form, setForm] = useState({ title: '', description: '', date: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createSchedule({ ...form, date: formatDate(form.date) });
    setForm({ title: '', description: '', date: '' });
    refetch();
  };

  const handleDelete = async (id: string) => {
    await deleteSchedule({ id });
    refetch();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-10">
      <div className="w-fit bg-white rounded-2xl shadow-2xl p-8 relative">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-indigo-600 tracking-tight drop-shadow">
          📅 나의 일정
        </h1>
        <ScheduleForm value={form} onChange={setForm} onSubmit={handleSubmit} />
        <div className={loading ? "relative opacity-50 pointer-events-none" : ""}>
          <ScheduleList schedules={data?.schedules ?? []} onDelete={handleDelete} />
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
            </div>
          )}
        </div>
        {error && <div className="text-center mt-4 text-red-500">에러 발생: {error.message}</div>}
      </div>
    </div>
  );
}