// GET CURRENT ROUTE
export const getRoutePath = (location, params) => {
  const { pathname } = location;
  if (!Object.keys(params).length) {
    return pathname;
  }
  let path = pathname;
  Object.entries(params).forEach(([paramName, paramValue]) => {
    if (paramValue) {
      path = path.replace(paramValue, `:${paramName}`);
    }
  });
  return path;
};
// Penggunaan => getRoutePath(location, params)