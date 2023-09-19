import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD"));
      }
    }

    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const validTask = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs().utc(new Date()).format()
    };

    if (params.id) {
      updateTask(params.id, validTask);
    } else {
      createTask(validTask);
    }
    navigate("/tasks");
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <label htmlFor="title">title</label>
          <input
            type="text"
            placeholder="Title"
            {...register("title")} //this from 'react-hook-form as 3 properties onChange, value, name, the value is used in setValue(line 7)
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />

          <label htmlFor="description">description</label>
          <textarea
            rows="3"
            placeholder="description"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>

          <label htmlFor="date">date</label>
          <input
            type="date"
            {...register("date")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />

          <button className="bg-indigo-500 px-4 py-2 rounded-md my-2">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
