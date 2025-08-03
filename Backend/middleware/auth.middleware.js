export const verifyAdmin = async (req, res, next) => {
  try {
    const adminKey = req.headers["x-admin-key"];

    if (!adminKey || adminKey !== process.env.ADMIN_SECRET)
      return res
        .status(403)
        .json({ success: false, message: "Admin access required" });
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Admin route" });
  }
};
