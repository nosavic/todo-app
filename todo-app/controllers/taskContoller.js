const Task = require("../models/task");

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const { description } = req.body;
    const task = new Task({ description, userId: req.user.id });
    await task.save();
    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    next(error);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { state } = req.body;
    const task = await Task.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      { state },
      { new: true }
    );
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};
