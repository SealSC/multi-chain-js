/**
 * Helper Tools
 */
import DecimalMath from "decimal.js";

const HelperTools = {
  getDateTime(inputTime) {
    let date = new Date(inputTime * 1000);
    let NowTime = new Date();
    let showtime = (NowTime - date) / 1000;

    return parseInt(showtime);
  },

  getShowDate(inputTime) {
    if (inputTime <= 60) {
      return inputTime + "s";
    }
    if (60 < inputTime && inputTime <= 3600) {
      return parseInt(inputTime / 60) + "m";
    }
    if (3600 < inputTime && inputTime <= 86400) {
      return parseInt(inputTime / 3600) + "h";
    }
    if (inputTime > 86400) {
      return parseInt(inputTime / 86400) + "d";
    }
  },

  getTransDate(inputTime) {
    inputTime = inputTime * 1000;

    if (window.localStorage.getItem("user_lang") === "zh") {
      return this.getPRCTime(inputTime);
    } else {
      return this.getUTCTime(inputTime);
    }
  },

  /**
   * Get UTC Time
   *
   * @param inputTime
   * @return {string}
   */
  getUTCTime(inputTime) {
    let date = new Date(inputTime);
    let Y = date.getUTCFullYear();
    let M =
      date.getUTCMonth() + 1 < 10
        ? "0" + (date.getUTCMonth() + 1)
        : date.getUTCMonth() + 1;
    let mouth = "";

    switch (M.toString()) {
      case "01":
        mouth = "Jan-";
        break;
      case "02":
        mouth = "Feb-";
        break;
      case "03":
        mouth = "Mar-";
        break;
      case "04":
        mouth = "Apr-";
        break;
      case "05":
        mouth = "May-";
        break;
      case "06":
        mouth = "Jun-";
        break;
      case "07":
        mouth = "Jul-";
        break;
      case "08":
        mouth = "Aug-";
        break;
      case "09":
        mouth = "Sep-";
        break;
      case "10":
        mouth = "Oct-";
        break;
      case "11":
        mouth = "Nov-";
        break;
      case "12":
        mouth = "Dec-";
        break;
      default:
        break;
    }

    let D =
      date.getUTCDate() < 10
        ? "0" + date.getUTCDate() + "-"
        : date.getUTCDate() + "-";
    let h =
      date.getUTCHours() < 10 ? "0" + date.getUTCHours() : date.getUTCHours();
    let m =
      date.getUTCMinutes() < 10
        ? "0" + date.getUTCMinutes()
        : date.getUTCMinutes();
    let s =
      date.getUTCSeconds() < 10
        ? "0" + date.getUTCSeconds()
        : date.getUTCSeconds();

    return mouth + D + Y + " " + h + ":" + m + ":" + s + " UTC";
  },

  /**
   * Get PRC Time
   *
   * @param inputTime
   * @return {string}
   */
  getPRCTime(inputTime) {
    let date = new Date(inputTime);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    let d = date.getDate();
    d = d < 10 ? "0" + d : d;
    let h = date.getHours();
    h = h < 10 ? "0" + h : h;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
  },

  getDayFunc(second_time) {
    let time = parseInt(second_time);

    if (parseInt(second_time) > 60) {
      let second = parseInt(second_time) % 60;
      let min = parseInt(second_time / 60);
      time = min + ":" + second;

      if (min > 60) {
        min = parseInt(second_time / 60) % 60;
        let hour = parseInt(parseInt(second_time / 60) / 60);
        time = hour + ":" + min + ":" + second;

        if (hour > 24) {
          hour = parseInt(parseInt(second_time / 60) / 60) % 24;
          let day = parseInt(parseInt(parseInt(second_time / 60) / 60) / 24);
          time = day + "day" + hour + ":" + min + ":" + second;
        }
      }
    }
    return time;
  },

  /**
   * To Financial Val
   *
   * @param value
   * @return {*}
   */
  toFinancialVal(value) {
    if (typeof value !== "undefined" && !isNaN(value)) {
      DecimalMath.set({ toExpNeg: -10 });
      value = new DecimalMath(value).toString();

      if (value === "0") return value;

      let dotIndex = value.indexOf(".");
      let valueLast = "";

      // Remove the decimal point
      if (dotIndex !== -1) {
        valueLast = value.substr(dotIndex);
        value = value.substr(0, dotIndex);
      }

      let tmpVal = value.split("").reverse();
      let retStr = "";

      for (let i = 0; i < tmpVal.length; i++) {
        if ((i + 1) % 4 === 0) {
          tmpVal.splice(i, 0, ",");
        }
      }
      tmpVal.reverse();

      for (let i = 0; i < tmpVal.length; i++) {
        retStr += tmpVal[i];
      }

      let retNum = retStr + valueLast;
      let dotIndex2 = retNum.indexOf(".");
      if (dotIndex2 !== -1 && retNum.length > (dotIndex2 + 5)) {
        retNum = retNum.substr(0, dotIndex2 + 5);
      }

      return retNum;
    } else {
      return 0;
    }
  },

  /**
   * String to Json
   *
   * @param data
   * @return {Object}
   */
  strToJson(data) {
    if (
      typeof data !== "object" &&
      typeof data !== "number" &&
      typeof data !== "undefined" &&
      data !== null &&
      data !== ""
    ) {
      if (data.substr(0, 1) === '"') {
        data = data.substr(1, data.length() - 1);
      }

      try {
        data = JSON.parse(data);
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }

    return data;
  },

  /**
   * Get information about the current browsing system.
   */
  getSysInfo() {
    let sys = {};

    let ua = navigator.userAgent.toLowerCase();

    let isOpera = ua.indexOf("opera") > -1;
    let isIE =
      ua.indexOf("compatible") > -1 && ua.indexOf("msie") > -1 && !isOpera;
    let isEdge = ua.indexOf("edge") > -1;
    let isFF = ua.indexOf("firefox") > -1;
    let isSafari = ua.indexOf("safari") > -1 && ua.indexOf("chrome") === -1;
    let isChrome = ua.indexOf("chrome") > -1 && ua.indexOf("safari") > -1;

    if (isIE) sys.browser = "ie";
    else if (isOpera) sys.browser = "opera";
    else if (isEdge) sys.browser = "edge";
    else if (isFF) sys.browser = "firefox";
    else if (isSafari) sys.browser = "safari";
    else if (isChrome) sys.browser = "chrome";

    sys.isMobile = ua.indexOf("mobile") > -1;

    return sys;
  },

  /**
   * Sort the 'value' of an object in the array according to the first letter.
   *
   * @param array
   * @param key
   * @return {*}
   */
  sortArrList(array, key) {
    return array.sort(function(a, b) {
      let x = a[key];
      let y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  },

  /**
   * Convert the string value of the 'json map' into an object.
   *
   * @param strMap
   * @return {any}
   * @private
   */
  strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
      obj[k] = v;
    }
    return obj;
  }
};

export default {
  install: function(Vue) {
    Vue.prototype.$HelperTools = HelperTools;
  },
  HelperTools
};
