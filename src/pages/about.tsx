import React from "react"
import Layout from "../components/layout"
import Typography from "@material-ui/core/Typography"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { AppBar, Tabs, Tab, Box } from "@material-ui/core"

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  }
}

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

export default () => {
  const intl = useIntl()

  const [value, setValue] = React.useState("one")

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Layout>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="about page tabs"
        >
          <Tab
            value="one"
            label={intl.formatMessage({ id: "who_am_i" })}
            wrapped
            {...a11yProps("one")}
          />
          <Tab
            value="two"
            label={intl.formatMessage({ id: "what_do_i_do" })}
            wrapped
            {...a11yProps("two")}
          />
          <Tab
            value="three"
            label={intl.formatMessage({ id: "what_do_i_do_fun" })}
            wrapped
            {...a11yProps("three")}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        <Typography variant="h4" color="textPrimary">
          <FormattedMessage id="who_am_i_blurb" />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index="two">
        <Typography variant="h4" color="textPrimary">
          <FormattedMessage id="what_do_i_do_blurb" />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index="three">
        <Typography variant="h4" color="textPrimary">
          <FormattedMessage id="what_do_i_do_fun_blurb" />
        </Typography>
      </TabPanel>
    </Layout>
  )
}
