import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Exhibits(){
    const classes = useStyles();
    return(
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Annexation of Texas (1844-45)</h4>
                        <p className={classes.cardCategoryWhite}>                            
                        </p>
                        </CardHeader>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Dred Scott v. Sanford (1857)</h4>
                        <p className={classes.cardCategoryWhite}>                            
                        </p>
                        </CardHeader>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Civil War (1861-65)</h4>
                        <p className={classes.cardCategoryWhite}>                            
                        </p>
                        </CardHeader>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Convention of Black Citizens</h4>
                        <p className={classes.cardCategoryWhite}>                            
                        </p>
                        </CardHeader>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Civil Rights Cases (1883)</h4>
                        <p className={classes.cardCategoryWhite}>                            
                        </p>
                        </CardHeader>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}