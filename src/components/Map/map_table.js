import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { TableContainer } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  table: {
    minWidth: 30,
  },
});


export default function DenseTable(props) {
  const classes = useStyles();

  const agent = props.agent
  const name = `${agent.lastName}, ${agent.firstName}`
  const type= `${agent.agentType}`

  function Info(){
      if(props.index!==0){
          return(
            <TableRow>
                <TableCell>Agent Name: {name}</TableCell>
                <TableCell >Agent Type: {type}</TableCell>  
            </TableRow>
          )
      }
      else{
        return(
            <TableRow>
                <TableCell>Agent Name: </TableCell>
                <TableCell >Agent Type: </TableCell>  
            </TableRow>
        )
      }
  }

  function PubDates(){
      const dates = props.agent.pubDate;
      if(props.index!==0){
          return(            
                <ul>
                    <li style={{fontSize:12, listStyleType:"none"}}>Publication Dates</li>
                    {dates.map((d, i) =>(                  
                    <li key={i}align="left" style={{fontSize:12}}>{d}</li>              
                    ))}
                </ul>    
          )
      }
      else{
          return(
              <></>
          )
      }
  }

  return (
    <TableContainer style={{boxShadow: "none"}} component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>            
            <Info />        
        </TableHead>       
      </Table>
            <PubDates />
    </TableContainer>
  );
}
