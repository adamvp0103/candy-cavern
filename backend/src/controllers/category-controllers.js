import Category from "../models/Category.js";

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    console.log(`Fetched the categories: ${typeof categories}`);
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findById(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ error: "Category not found" });
  }
};

export { getCategories, getCategory };
