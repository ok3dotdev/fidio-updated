export const normalizeText = (s, doNormalize = true) => {
  let temp = s;
  if (doNormalize) {
    if (typeof temp === 'string') {
      temp = temp.replace(/:nbsp;/g, ' ');
    }
  }
  return temp;
};