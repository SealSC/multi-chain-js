const LANG = "WEBSITE_LANG"

function SetLang(lang) {
  window.localStorage.setItem(LANG, lang)
}

function GetLang(defaultLang) {
  let localLang = window.localStorage.getItem(LANG)

  return localLang || defaultLang
}

export default {
  SetLang,
  GetLang,
}