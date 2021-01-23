export default (value, type = "date") => {
  const date = new Date(value);
  if (type === "date") {
    return date.toLocaleDateString();
  } else if (type === "time") {
    return date.toLocaleString();
  } else {
    return date.toLocaleString();
  }
};
