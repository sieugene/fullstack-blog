const passport = require("passport");
const { Router } = require("express");
const ctr = require("../controllers/post.controller");
const router = Router();

// Admin
// api/post/admin
router.post(
  "/admin/",
  passport.authenticate("jwt", { session: false }, ctr.create)
);
router.get(
  "/admin/",
  passport.authenticate("jwt", { session: false }),
  ctx.getAll
);
router.get(
  "/admin/:id",
  passport.authenticate("jwt", { session: false }),
  ctx.getById
);
router.put(
  "/admin/:id",
  passport.authenticate("jwt", { session: false }),
  ctx.update
);
router.delete(
  "/admin/:id",
  passport.authenticate("jwt", { session: false }),
  ctx.remove
);
// Base
// api/post
router.get("/", ctr.getAll);
router.get("/:id", ctr.getById);
router.put("/:id", ctr.addView);

module.exports = router;
