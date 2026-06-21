import User from "../models/User.js";

const seedAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({
      email: process.env.ADMIN_EMAIL,
    });

    if (existingAdmin) {
      console.log("Default admin already exists");
      return;
    }

    await User.create({
      name: process.env.ADMIN_NAME || "Villa Owner",
      email: process.env.ADMIN_EMAIL || "admin@villa.com",
      password: process.env.ADMIN_PASSWORD || "admin123",
      role: "admin",
    });

    console.log("Default admin created successfully");
  } catch (error) {
    console.error("Admin seed error:", error.message);
  }
};

export default seedAdmin;