import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Data(){
    const classes = useStyles();
    return(
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="gray">
                        <h4 className={classes.cardTitleWhite}>Locations</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                        
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="gray">
                        <h4 className={classes.cardTitleWhite}>Editors</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                        
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="gray">
                        <h4 className={classes.cardTitleWhite}>Subscribers</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                        
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="gray">
                        <h4 className={classes.cardTitleWhite}>Advertisements</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                        
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="gray">
                        <h4 className={classes.cardTitleWhite}>Topics</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                        
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}