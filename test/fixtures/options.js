export const multiColumnSearchOtpionsIncludes = (searchTerm) => ({
  number: {
    type: 'includes',
    value: '',
  },
  first: {
    type: 'includes',
    value: searchTerm,
  },
  last: {
    type: 'includes',
    value: '',
  },
  handle: {
    type: 'includes',
    value: '',
  },
});

export const multiColumnSearchOtpionsExact = (searchTerm) => ({
  number: {
    type: 'exact',
    value: '',
  },
  first: {
    type: 'exact',
    value: searchTerm,
  },
  last: {
    type: 'exact',
    value: '',
  },
  handle: {
    type: 'exact',
    value: '',
  },
});

export const tableSearchOtpionsIncludes = (searchTerm) => ({
  type: 'includes',
  value: searchTerm,
});

export const tableSearchOtpionsExact = (searchTerm) => ({
  type: 'exact',
  value: searchTerm,
});
