import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import ReactCountryFlag from "react-country-flag"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"

const languageName = {
  en: "us",
  ja: "jp",
}

languageName["zh-hk"] = "hk"
languageName["zh-tw"] = "tw"
languageName["zh-cn"] = "cn"


function handleChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
  changeLocale(event.target.value);
}

const Language = () => {
  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        <Select value={currentLocale} onChange={handleChange} disableUnderline>
          {
            languages.map(language => (
              <MenuItem key={language} value={language}>
                <ReactCountryFlag
                  countryCode={languageName[language]}
                  style={{
                    width: "40px",
                    height: "40px",
                    margin: 0
                  }}
                  svg
                />
              </MenuItem>
            ))}
        </Select>
      }
    </IntlContextConsumer>
  )
}

export default Language
