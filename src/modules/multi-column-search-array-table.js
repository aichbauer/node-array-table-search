const checkIfValid = (data) => {
  if (!Array.isArray(data)) {
    throw new Error(`data has to be typeof: ${typeof []} data instanceof Array: ${[] instanceof Array} but got typeof: ${typeof data} data instanceof Array: ${data instanceof Array}`);
  } else if (
    Array.isArray(data) &&
    data.length > 0 &&
    typeof data[0] !== 'object'
  ) {
    throw new Error(`data has to be an array of objects but data[0] got typeof: ${typeof data[0]}`);
  }
};

const createTableCheck = (data, options, tableCheck) => {
  const table = [...tableCheck];
  options.forEach((valueEntry) => {
    const currentValue = valueEntry[1]
      .value
      .toString()
      .toLowerCase();
    const currentItem = valueEntry[0];

    options.forEach((searchEntry, idx) => {
      const currentSearch = searchEntry[1].type;

      data.forEach((item, i) => {
        const currentItemValue = item[searchEntry[0]] ?
          item[searchEntry[0]].toString().toLowerCase() :
          '';
        if (currentItem === searchEntry[0]) {
          switch (currentSearch) {
            case 'exact':
              if (
                currentItemValue === currentValue &&
                currentValue.length > 0
              ) {
                table[i][idx] = true;
              } else if (currentValue.length === 0) {
                table[i][idx] = true;
              } else {
                table[i][idx] = false;
              }
              break;
            case 'includes':
            default:
              if (
                currentItemValue.includes(currentValue) &&
                currentValue.length > 0
              ) {
                table[i][idx] = true;
              } else if (currentValue.length === 0) {
                table[i][idx] = true;
              } else {
                table[i][idx] = false;
              }
              break;
          }
        }
      });
    });
  });

  return table;
};

export const multiColumnSearchArrayTable = (data, options) => {
  checkIfValid(data);

  const opts = Object
    .entries(options)
    .filter((entry) => (
      typeof entry[1] === 'object' &&
      (
        entry[1].value ||
        entry[1].value === ''
      )
    ));

  const emptyTable = data.map(() => []);

  const checkedTable = createTableCheck(data, opts, emptyTable);

  const searchedData = data
    .filter((dataItem, idx) => (
      checkedTable[idx].every((item) => item)
    ));

  return searchedData;
};
