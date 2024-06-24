
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutline";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlined from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinuedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined"; 
import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import { Menu, MenuItem, ProSidebar } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from "../../theme";
const SideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>('Dashboard');


    return (
        <Box sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important"
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important"
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important"
            }
        }}>
            <ProSidebar>
                <Menu>
                    <MenuItem>
                    </MenuItem>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default SideBar