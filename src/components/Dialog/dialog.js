import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import POL from 'views/Newspapers/content/palladium_of_liberty/palladium_of_liberty_tabs';
import AA from 'views/Newspapers/content/aliened_american/aa_tabs';
import BO from 'views/Newspapers/content/beyond_ohio/bo_tabs';
import BJ from 'views/Newspapers/content/black_journalism/bj_tabs';
import BPCW from 'views/Newspapers/content/black_press_civil_war/bpcw_tabs';
import RBP from 'views/Newspapers/content/renaissance_black_press/rbp_tabs';
import Afro_A from 'views/Newspapers/content/afro_american/afro_american_tabs';
import DT from 'views/Newspapers/content/dayton_tattler/dayton_tattler_tabs'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));


export default function FullScreenDialog(props) {

  const classes = useStyles();
  //const classes1 = useStyles1();
  const [open, setOpen] = React.useState(false);

  const components = {
  "1840s: Palladium of Liberty": POL,
  "The Afro-American": Afro_A,
  "1850s: Aliened American": AA,
  "1860s: Black Press circa Civil War" : BPCW,
  "1870s and 1880s: 2nd Generation of Black Journalism": BJ,
  "1890s and Beyond: Renaissance of the Black Press in Ohio": RBP,
  "Beyond Ohio": BO,
  "Dayton Tattler":DT
}
function Comp(p, t) {
  const Component = components[p];
  return <Component />
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{textTransform:"none",
                    backgroundColor:"Transparent",
                    border:"none"  
                    }} 
                    onClick={handleClickOpen}>
          <h4 className={props.titleStyle}>{props.title}</h4>          
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} >      
        <AppBar className={classes.appBar} style={{ background: 'transparent', boxShadow: 'none'}}>
          <Toolbar style={{minHeight:15}}>
            <IconButton edge="start" onClick={handleClose} aria-label="close">
              <CloseIcon style={{color:"black"}}/>
            </IconButton>            
          </Toolbar>
        </AppBar>
          {Comp(props.title)}
      </Dialog>
    </div>
  );
}
