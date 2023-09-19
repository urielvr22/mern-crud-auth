import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
        user: req.user.id,
      }).populate("user"); /* 
        {
            user: req.user.id,
        }
        is because I only need the tasks of this user
    
        .populate('user')
        is because I am joining the info of the user with the task and not only an id
        */
      res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" })
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;

  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id,
  });

  const savedTask = await newTask.save();
  res.json(savedTask);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" })
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user"); //params because the id come from the url
    if (!task)
      return res.status(404).json({
        message: "Task not found",
      });
    res.json(task);
  } catch (error) {
    return res.status(404).json({
        message: "Task not found",
      });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
  if (!task)
    return res.status(404).json({
      message: "Task not found",
    });
  return res.sendStatus(204); //204 means that now does not exist the task
  } catch (error) {
    return res.status(404).json({
        message: "Task not found",
      });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      }); //"{new: true}" is because if not it send the old task and not the new
      if (!task)
        return res.status(404).json({
          message: "Task not found",
        });
      res.json(task);
  } catch (error) {
    return res.status(404).json({
        message: "Task not found",
      });
  }
};
