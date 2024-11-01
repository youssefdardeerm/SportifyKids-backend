import Child from '../../../db/models/Childdata.model.js';

export const createChild = async (req, res) => {
  try {
    const { name, age, trainingDuration } = req.body;
    const { hours, minutes, seconds } = trainingDuration;

    // إنشاء حالة استنادًا إلى وقت التدريب
    const status =
      hours * 60 + minutes + seconds / 60 < 5
        ? 'good'
        : hours * 60 + minutes + seconds / 60 === 5
        ? 'excellent'
        : 'Skilled Trainee';

    const newChild = new Child({
      name,
      age,
      trainingDuration: { hours, minutes, seconds },
      status,
    });

    await newChild.save();
    res.status(201).json({ message: 'Child created successfully', data: newChild });
  } catch (error) {
    res.status(500).json({ message: 'Error creating child', error: error.message });
  }
};

export const getChildren = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 4; // 4 بيانات لكل صفحة
    const skip = (page - 1) * limit;

    const children = await Child.find().skip(skip).limit(limit).exec();
    const total = await Child.countDocuments();

    res.status(200).json({
      message: 'Children retrieved successfully',
      data: children,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalRecords: total,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving children', error: error.message });
  }
};
