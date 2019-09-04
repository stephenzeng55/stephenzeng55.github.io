import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import ReactCountryFlag from "react-country-flag"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Input from "@material-ui/core/Input"

const languageName = {
  en: "us",
  ja: "jp",
}
languageName["zh-hk"] = "hk"
languageName["zh-tw"] = "tw"
languageName["zh-cn"] = "cn"

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {/* <Select> */}
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            // <MenuItem>
              <a key={language} onClick={() => changeLocale(language)} style={{ margin: 2 }}>
                <ReactCountryFlag
                  code={languageName[language]}
                  styleProps={{
                    width: "30px",
                    height: "30px",
                  }}
                  svg
                />
              </a>
            // </MenuItem>
          ))
        }
        {/* </Select> */}
      </IntlContextConsumer>
    </div>
  )
}

export default Language
