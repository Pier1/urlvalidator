import regex from './regex';

export function splitParams(deliminator, str) {
  try {
    if (str) {
      let tempArry = str.replace(deliminator, '').split('&');
      tempArry = tempArry.map(keyValStr => {
        const keyValArr = keyValStr.split('=');
        const obj = {};
        obj.key = keyValArr[0];
        obj.value = keyValArr[1];
        return obj;
      });
      return tempArry;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
}

export function combineParams(deliminator, arr) {
  try {
    let combinedParams = '';
    if (arr && arr.length) {
      for (let index = 0; index < arr.length; index += 1) {
        const key = arr[index].key;
        const value = arr[index].value;
        if (key.length) {
          combinedParams += `${(index === 0 ? deliminator : '&') + key}${value.length ? `=${  value}` : ''}`;
        }
      }
    }
    return combinedParams;
  } catch (error) {
    throw new Error(error);
  }
}

export function validateCharacters(val) {
  return !val.match(regex.unsafeChars);
}

export function validateProtocol(val) {
  return !!val.match(regex.https) || !!val.match(regex.http);
}

export function validateHost(val) {
  return !!val.match(regex.host);
}

export function validatePath(val) {
  return !!val.match(regex.path);
}
