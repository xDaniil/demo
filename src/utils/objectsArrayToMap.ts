export const objectsArrayToMap = (data: any[], fieldName = "id") => {
  return data.reduce(
    (acc, curr) => ({
      ...acc,
      [curr[fieldName]]: {
        ...curr,
      },
    }),
    {}
  );
};
