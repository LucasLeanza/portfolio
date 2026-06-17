import Education from "../models/Education.js"

export const getEducation = async (req, res) => {
  try {
    const education = await Education.find()
    res.json(education)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body)
    res.status(201).json(education)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}