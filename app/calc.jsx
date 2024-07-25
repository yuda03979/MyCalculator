
export let arr = ["+0"];

const calculate = (arr) => {
  let result = 0;
  arr.forEach(element => {
    const value = parseFloat(element.slice(1));

    switch (element[0]) {
      case "+":
        result += value;
        break;
      case "-":
        result -= value;
        break;
      case "*":
        result *= value;
        break;
      case "/":
        result /= value;
        break;
      default:
        break;
    }
  });
  console.log({result})
  return result;
}

const lastNumber = (arr) => {
  if (arr.length === 1) {
    return parseFloat(arr[0].slice(1));
  }
  const last = arr[arr.length - 1];
  if (last.length === 2) {
    return parseFloat(arr[arr.length - 2].slice(1));
  } else {
    return parseFloat(last.slice(1));
  }
}

const addNumber = (arr, number) => {
//   if (arr[arr.length - 1][1] == 0) {
//     arr[arr.length - 1] = arr[arr.length - 1][0] + number
//     return arr;
//   }
  arr[arr.length - 1] += number;
  return arr;
}

const initializeData = () => {
  return ["+0"];
}

const posNeg = (arr) => {
  arr.push("*-1");
  arr = ["+" + calculate(arr).toPrecision()]
  return arr;
}

const percentage = (arr) => {
  arr.push("*0.01");
  return arr;
}

const operator = (arr, operator, result) => {
  if (result != 0 && arr.length == 1 && arr[0] == ["+0"]) {
    arr = ["+" + result.toPrecision()]
    console.log(["hello2", arr])
  }
  const last = arr[arr.length - 1];
  if (operator == "-" && last.length === 2) {
    arr[arr.length - 1] = arr[arr.length - 1][0] + "-";
    return arr;
  }

  if (last.length === 2) {
    arr[arr.length - 1] = operator + "0";
    return arr;
  }
  arr.push(operator + "0")
  return arr;
}

const outputEqual = (arr) => {
  let result = calculate(arr);
  arr = ["+0"]
  return [arr, result];
}

const calc = ({type, value, arr, result}) => {
  switch (type) {
    case "number":
      arr = addNumber(arr, value);
      return [arr, lastNumber(arr)];
    case "clear":
      return [initializeData(), "0"];
    case "posneg":
      arr = posNeg(arr);
      return [arr, calculate(arr)];
    case "percentage":
      arr = percentage(arr);
      return [arr, calculate(arr)];
    case "operator":
      arr = operator(arr, value, result);
      console.log(["hello", arr])
      return [arr, lastNumber(arr)];
    case "equal":
      return outputEqual(arr);
    default:
      return [arr, lastNumber(arr)];
  }
}

export default calc;