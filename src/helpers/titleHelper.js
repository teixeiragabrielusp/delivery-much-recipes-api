const titleFixer = (title) => {
  title = title.replace(/[\n\r]/g, '');
  title = title.replace(/[\t\r]/g, '');

  return title.trim();
};

export default titleFixer;
