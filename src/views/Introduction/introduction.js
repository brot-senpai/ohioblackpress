import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


const useStyles = makeStyles(styles);

export default function Introduction(){
    const classes = useStyles();
    return(
        
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <CustomTabs
                        className={classes.cardTitleWhite}
                        title=""
                        headerColor="info"
                        tabs={[
                        {
                            tabName: "About",                          
                            
                        },
                        {
                            tabName: "Sources and Methods",                            
                            
                        },
                        {
                            tabName: "Acknowledgement",                                                     
                            
                        }
                        ]}
                    />
                </GridItem>
                {/* <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>Sources and Methods</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                            Something about us
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>Acknowledgement</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                            {ack}
                        </CardBody>
                    </Card>
                </GridItem> */}
            </GridContainer>
            
        </div>
        
    )
}