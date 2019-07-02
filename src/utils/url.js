const getUrlParam = (str) => {
  if(!str) return "";
  return str.split("&").reduce(function(prev, curr, i, arr) {
    let p = curr.split("=");
      prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
      return prev;
    }, {
  });
}

export default getUrlParam;
