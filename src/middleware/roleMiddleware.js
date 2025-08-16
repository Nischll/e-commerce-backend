// function authorizeRoles(...allowedRoles) {
//   return (req, res, next) => {
//     if (!allowedRoles.includes(req.user.role)) {
//       return res.status(403).json({ error: 'Access denied' });
//     }
//     next();
//   };
// }

function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (
      !allowedRoles
        .map((r) => r.toLowerCase())
        .includes(req.user.role.toLowerCase())
    ) {
      return res.status(403).json({ error: "Access denied" });
    }
    next();
  };
}

module.exports = authorizeRoles;
