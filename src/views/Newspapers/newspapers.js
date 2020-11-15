import React, {lazy, Suspense} from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Dialog from "components/Dialog/dialog";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import newspapers_data from "./newspapers_data.json";

const useStyles = makeStyles(styles);

export default function Newspapers({ match }){
    const classes = useStyles();

    const ImportComponent = (c) =>{
        
        const title = c.comp.title;
        const s = c.comp.component_loc;
        const Component = lazy(() => import(`${s}`));
        
        return (
            <GridItem xs={12} sm={12} md={6}>
                <Card>
                    <CardHeader color="info">
                        <Dialog title={title}
                                    titleStyle={classes.cardTitleWhite}
                                    titleColor={classes.cardCategoryWhite}
                                />
                    </CardHeader>
                    <CardBody>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Component />
                        </Suspense>
                    </CardBody>
                </Card>
            </GridItem>
        );
    } 
    return(
        <div>
            <GridContainer>                
                {newspapers_data.newspapers.map((v, i)=>{return <ImportComponent key={i} comp={v}/>})}
            </GridContainer>
        </div>
    )
}
