import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { NoSsr } from "@material-ui/core";
import { useState } from "react";

const SlideTabs = ({ title, contents }) => {
  const styles = { Appber: { backgroundColor: "white", boxShadow: "none", borderBottom: "1px solid rgb(179 179 179)" }, TabPanel: { width: "100%" } };
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const useStyles = makeStyles({
    header: {
      "& .MuiTabs-flexContainer": {
        justifyContent: "center",
      },
    },
    body: {
      padding: 0,
    },
  });
  const classes = useStyles();
  return (
    <div className="wraper">
      <NoSsr>
        <TabContext value={value}>
          <AppBar position="static" className={classes.header} style={styles.Appber}>
            <TabList onChange={handleChange} aria-label="simple tabs example">
              {title.map((item, index) => (
                <Tab key={index} label={item} value={String(index + 1)} style={{ fontFamily: "Arita-buri-SemiBold", color: "rgb(72 72 72)", height: "100%" }} />
              ))}
            </TabList>
          </AppBar>
          {contents.map((item, index) => (
            <TabPanel key={index} value={String(index + 1)} className={classes.body} style={styles.TabPanel}>
              {item}
            </TabPanel>
          ))}
        </TabContext>
      </NoSsr>
    </div>
  );
};

export default SlideTabs;
