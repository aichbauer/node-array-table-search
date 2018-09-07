const checkIfValid = (data) => {
  if (!Array.isArray(data)) {
    throw new Error(`data has to be typeof: ${typeof []} data instanceof Array: ${[] instanceof Array} but got typeof: ${typeof data} data instanceof Array: ${data instanceof Array}`);
  } else if (
    Array.isArray(data)
    && data.length > 0
    && typeof data[0] !== 'object'
  ) {
    throw new Error(`data has to be an array of objects but data[0] got typeof: ${typeof data[0]}`);
  }
};

export const searchArrayTable = (data, options) => {
  checkIfValid(data);

  let searchedData = [];

  if (options.value) {
    const searchValue = options.value.toString().toLowerCase();

    data.forEach((item) => {
      const currentItemValues = Object
        .keys(item)
        .map((key) => {
          const result = item[key] ? item[key].toString().toLowerCase() : '';

          return result;
        });

      switch (options.type) {
        case 'exact': {
          const exact = currentItemValues.some((val) => val === searchValue);

          if (exact) {
            searchedData.push(item);
          }
          break;
        }
        case 'includes':
        default: {
          const includes = currentItemValues.some((val) => val.includes(searchValue));

          if (includes) {
            searchedData.push(item);
          }
          break;
        }
      }
    });
  } else {
    searchedData = data;
  }

  return searchedData;
};
