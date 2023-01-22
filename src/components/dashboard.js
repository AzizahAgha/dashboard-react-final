import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Grid} from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Chart from "react-apexcharts";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import {grey} from '@mui/material/colors';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import Menu from '@mui/material/Menu';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import img1 from './images/fav.png'
import img2 from './images/whale.png'
import img3 from './images/bird.png'
import img4 from './images/snail.png'
import img5 from './images/jaq.jfif'
import img6 from './images/matt.jfif'
import img7 from './images/alex.jfif'
import img8 from './images/matheww.jfif'
import img9 from './images/Carla.jfif'
import img10 from './images/sam.webp'

import {SideBar} from "./sidebar";
import ApexChart from "./apexchart";
import { options } from "./charts";
import { baroptions } from "./charts";



export default function Dashboard(){
    const [selected,setSelected]=useState(0);
  const [show,setShow]=useState(false);
  const [val, setVal] = React.useState(dayjs('2023-01-17'));

  //-----------------------------icon menu------------------------------
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
//-----------------------------paper-----------------------------------------      

const Item = styled(Paper)(({ theme }) => ({

    ...theme.typography.body2,
    
    textAlign: 'center',
    padding: theme.spacing(0),
    
boxShadow: "0px 0px 9px 4px rgb(0 0 0 / 4%), 0px 5px 0px 10px rgb(0 0 0 / 0%), 0px 8px 30px -26px rgb(0 0 0 / 16%)",
    borderRadius:"0%",
    border:"2px solid rgb(218,218,218)",
    color: "#ff0000, #247BA0,#ffff00"
    // color: theme.palette.text.secondary,
  }));
  


  return(
    
    <div className="dashboard">

    <div className={show?'hide':'sidebar'}>
     <div className="top">
     <IconButton
       size="large"
       edge="start"
       color="inherit"
       aria-label="menu"
       sx={{ mr: 2 }}
     >
       <MenuIcon onClick={()=>setShow(true)}/>
     </IconButton>
       <span className="logoo">givepanel</span>
     </div>
     <br></br>
     
    
{/* --------------------------------------------------------------------------------   */}


     <div className="menuu">
       {SideBar.map((item,index)=>{
         return(
           <div className={selected===index?'menuItem active':'menuItem'}
           key={index}
           onClick={()=>setSelected(index)}
           >
            
             <item.icon className={selected===index?'iconactive':''}/>
             <span>
               {item.heading}
             </span>
           </div>
         )
       })}

       <div>

       </div>   

     </div>

{/* --------------------------------------------------------------------------------   */}    
     <div className="bottom">
       {/* <div className="co1 coloroption"></div>
       <div className="co2 coloroption"></div>
        */}
        <div className="menusetting" >
        <SettingsOutlinedIcon  />
           <Link className="span">Settings</Link>
        </div>
       
     </div>
   </div>


      <div className="main">

            <div className="headdiv">
            <div className="div">
           {show?<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={()=>setShow(false)}/>
          </IconButton>:null}
            <h5 className="left">Dashboard</h5>
            </div>
            <div className="div">
            <Link class="whatsnew" to='/list' >What's New</Link>  
            <Avatar sx={{ bgcolor: grey[900] }} className="black" variant="square"> TN</Avatar>
            <span className="down">Tiger Nixon</span>
            <React.Fragment>
            <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            < ArrowDropDownIcon />
          </IconButton>
          <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My Team
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
            </React.Fragment>
            </div>
           
            </div>
            
            <hr className="hrr"></hr>
            
            <div className="headdiv">
            <LocalizationProvider  dateAdapter={AdapterDayjs} className="time" >
              <DatePicker
             
                  views={['month','year']}
                  minDate={dayjs('2022-03-01')}
                  maxDate={dayjs('2023-01-01')}
                  value={val}
                  onChange={(newValue) => {
                  setVal(newValue);
                  }}
                renderInput={(params) => <TextField {...params} />}
                dayOfWeekFormatter={(day) => `${day}.`}
                 toolbarFormat="ddd DD MMMM"
                InputProps={{ sx: { borderRadius: '67px',fontSize:'12px',fontWeight:'700',backgroundColor:'white' } }}
              />
              
            </LocalizationProvider>

            
               
               <Link class="buttonn" to='/list' ><AddIcon/>Upload Data</Link>  
            </div>


            <div className="middle-container">
            <Box sx={{  width: "100%",justifyContent:'center',boxShadow:0}} >
            <Container maxWidth="md lg">
            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 3, md: 3,lg:2 }} alignItems="center">
            
            <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="headdivv">
               <img class="image2" src={img1} alt="emp" width="" />
               {/* <em>Employess</em> */}
               <div className="menuuu">
                  <Link className="topic">Employees</Link>
                  <h4 className="values">$186</h4>
                  </div>
                  </div>
               </Item>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="headdivv">
               <img class="image2" src={img4} alt="emp" width="" />
               {/* <em>Employess</em> */}
               <div className="menuuu">
                  <Link className="topic">Temporary</Link>
                  <h4 className="values">$77</h4>
                  </div>
                  </div>
               </Item>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item>
               <div className="headdivv">
               <img class="image2" src={img3} alt="emp" width="" />
               
               {/* <em>Employess</em> */}
               <div className="menuuu ">
                  <Link className="topic">Intern Emp</Link>
                  <h4 className="values">$678</h4>
                  </div>
                  </div>
               </Item>
               </Grid>

               
               <Grid item xs={12} md={6} lg={6}>
               <div className="headdiv">
               <h4 className="head">Revenue</h4>
               <Link className="head2">View Full Report</Link>
               </div>
               <Item>
               <Chart
                options={options}
                series={options.series}
                type="line"
                width="100%"
                height="250"
                justifyContent="center"
               />
               </Item>
               </Grid>
               
               

               <Grid item  xs={12} md={6} lg={6}>
               <div className="headdiv">
               <h4 className="head">Donations</h4>
               <Link className="head2">View Full Report</Link>
               </div>
               
               <Item>
               <Chart
                // options={pieOption.options}
                // series={pieOption.series}
                options={baroptions}
                series={baroptions.series}
                type="bar"
                width="100%"
                height="175%"
               />
               </Item>   
               </Grid>
            </Grid>
            </Container>
            </Box>   

            <div className="mid">

               <div className="headdiv">
               <h4 className="head">Top </h4>
               <Link className="head2">view</Link>
               </div>
             </div>

            <Box sx={{  width: "100%",justifyContent:'center',boxShadow:0}} >
            <Container maxWidth="md lg">
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 3, md: 3,lg:2 }} alignItems="center">
               
            <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="cardd">
               <div className="headdiv">
               <div className="values">$34553.98</div>
               <div className="inf"><InfoOutlinedIcon className="iconss"/></div>
               </div>
               </div>
               <hr></hr>
               <div className="headdivv">
               <img class="image1" src={img5} alt="emp" width="" />
               {/* <em>Employess</em> */}
               <div className="menuuu">
                  <Link className="topicc">Ron Hill</Link>
                  <h4 className="valuess">25 Dec 20</h4>
                  </div>
                  </div>
               </Item>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="cardd">
               <div className="headdiv">
               <div className="values">$3450.90</div>
               <div className="inf"><InfoOutlinedIcon className="iconss"/></div>
               </div>
               </div>
               <hr></hr>
               <div className="headdivv">
               <img class="image1" src={img6} alt="emp" width="" />
               {/* <em>Employess</em> */}
               <div className="menuuu">
                  <Link className="topicc">Matt Watson</Link>
                  <h4 className="valuess">22 dec 21</h4>
                  </div>
                  </div>
               </Item>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="cardd">
               <div className="headdiv">
               <div className="values">$450.90</div>
               <div className="inf"><InfoOutlinedIcon className="iconss"/></div>
               </div>
               </div>
               <hr></hr>
               <div className="headdivv">
               <img class="image1" src={img7} alt="emp" width="" />
               {/* <em>Employess</em> */}
               <div className="menuuu">
                  <Link className="topicc">Alex Jacob</Link>
                  <h4 className="valuess">25 Dec 21</h4>
                  </div>
                  </div>
               </Item>
               </Grid>



               <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="cardd">
               <div className="headdiv">
               <div className="values">$4992.75</div>
               <div className="inf"><InfoOutlinedIcon className="iconss"/></div>
               </div>
               </div>
               <hr></hr>
               <div className="headdivv">
               <img class="image1" src={img8} alt="emp" width="" />
               {/* <em>Employess</em> */}
               <div className="menuuu">
                  <Link className="topicc">Mathew James</Link>
                  <h4 className="valuess">27 Dec 20</h4>
                  </div>
                  </div>
               </Item>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="cardd">
               <div className="headdiv">
               <div className="values">$953.90</div>
               <div className="inf"><InfoOutlinedIcon className="iconss"/></div>
               </div>
               </div>
               <hr></hr>
               <div className="headdivv">
               <img class="image1" src={img9} alt="emp" width="" />
               {/* <em>Employess</em> */}
               <div className="menuuu">
                  <Link className="topicc">Carla Vanson</Link>
                  <h4 className="valuess">27 dec 21</h4>
                  </div>
                  </div>
               </Item>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="cardd">
               <div className="headdiv">
               <div className="values">$820.90</div>
               <div className="inf"><InfoOutlinedIcon className="iconss"/></div>
               </div>
               </div>
               <hr></hr>
               <div className="headdivv">
               <img class="image1" src={img10} alt="emp" width="" />
               {/* <em>Employess</em> */}
               <div className="menuuu">
                  <Link className="topicc">Samuel Will</Link>
                  <h4 className="valuess">28 Dec 21</h4>
                  </div>
                  </div>
               </Item>
               </Grid>


            </Grid>
            </Container>
            </Box>

          
            
        </div>
        </div>

</div>
  )
}
