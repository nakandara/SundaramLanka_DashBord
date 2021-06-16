import React,{useState} from 'react'

import {Table,TableHead,TableRow,TableCell,makeStyles} from '@material-ui/core'



const useStyles = makeStyles (theme =>({
   table:{
      marginTop : theme.spacing(1),
      '& thead th':{
         fontWeight:'600',
         color:theme.palette.primary.main,
         backgroundColor:theme.palette.primary.light
      },
      '& tbody td ':{
         fontWeight:'300'
      },
   }
}))


 export const UseTable = ()=>{



   return (
<TableHead>

</TableHead>
   )

}