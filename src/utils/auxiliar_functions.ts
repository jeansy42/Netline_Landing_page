export const formatCPF = (value: string, cpf: string) => {
  if (cpf.length < value.length) {
    let fdValue = value.replace(/[.-]/g, "");
    fdValue = fdValue.replace(/[^0-9]/g, "");
    const first =
      fdValue.length >= 3 ? fdValue.slice(0, 3) + "." : fdValue.slice(0, 3);

    const second =
      fdValue.length >= 6 ? fdValue.slice(3, 6) + "." : fdValue.slice(3, 6);

    const third =
      fdValue.length >= 9 ? fdValue.slice(6, 9) + "-" : fdValue.slice(6, 9);

    const forth = fdValue.slice(9);

    return `${first}${second}${third}${forth}`.slice(0, 14);
  } else return value;
};

export const formatWhatsapp = (value: string, whatsapp: string) => {
  if (whatsapp.length < value.length) {
    let fdVal = value.replace(/[()-]/g, "");
    fdVal = fdVal.replace(/[^0-9]/g, "");

    const first =
      fdVal.length >= 2 ? `(${fdVal.slice(0, 2)})` : fdVal.slice(0, 2);

    const second =
      fdVal.length >= 6 ? fdVal.slice(2, 6) + "-" : fdVal.slice(2, 6);

    const third = fdVal.slice(6);

    return `${first}${second}${third}`.slice(0, 13);
  } else return value;
};

export const removeCharacters = (value: string) => {
  return value.replace(/[().-]/g, "");
};

export const replaceWhiteSpace = (value: string) => {
  return value.replace(/ /g, "+");
};
