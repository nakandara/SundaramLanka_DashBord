<Container>

  
  <Divider/>
<div className='table--responsive'>
<div className="label"><div className="plan"><h4>Plan</h4></div>
<div className="do"><h4>Do</h4></div>
<div className="check"><h4>Check</h4></div></div>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table"    >
        <TableHead>
          <TableRow>
            <TableCell align="center" className='tHeadThree'>Date</TableCell>
            {/* <TableCell align="center" className='tHeadTwo'>Ap No</TableCell> */}
            <TableCell align="center" className='tHeadThree'>Accountability</TableCell>
            <TableCell align="center" className='tHeadThree'>Metrix</TableCell>
            <TableCell align="center" className='tHeadThree'>Target</TableCell>
            <TableCell align="center" className='tHeadThree'>Actual</TableCell>
            <TableCell align="center" className='tHeadFour'>Reason Not Achive Target</TableCell>
            <TableCell align="center" className='tHeadFour'>Root Cause</TableCell>
            <TableCell align="center" className='tHeadThree'>Counter</TableCell>
            <TableCell align="center" className='tHeadThree'>Resp</TableCell>
            <TableCell align="center" className='tHeadThree'>Target</TableCell>
            <TableCell align="center" className='tHeadThree'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rccmData.map((row) => (
            <TableRow key={row.id}>
              <TableCell  align="center" scope="row" className='tHeadThreeD'>
                { moment(row.in_date).format('YY MMM D')}
              </TableCell>
              {/* <TableCell align="center"  className='tHeadOneD'>{row.ap_no}</TableCell> */}
              <TableCell align="center" className='tHeadThreeD'>{row.accountability}</TableCell>
              <TableCell align="center" className='tHeadThreeD'> {row.metix}</TableCell>
              <TableCell align="center" className='tHeadThreeD'>{row.target}</TableCell>
              <TableCell align="center" className='tHeadThreeD'>{row.actual}</TableCell>
              <TableCell align="center" className='tHeadFourD'>{row.reason_achive_not_target}</TableCell>
              <TableCell align="center" className='tHeadFourD'>{row.root_cause}</TableCell>
              <TableCell align="center" className='tHeadThreeD'>{row.counter_measure}</TableCell>
              <TableCell align="center" className='tHeadThreeD'>{row.resp}</TableCell>
              <TableCell align="center" className='tHeadThreeD'>{row.target}</TableCell>
              <TableCell align="center" className='tHeadThreeD'>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></div>
    








<Container>

  
<Divider/>
<div className='table--responsive'>
<div className="label "><div className="plan"><h4>Plan</h4></div>
<div className="do"><h4>Do</h4></div>
<div className="check"><h4>Check</h4></div></div>
  <TableContainer component={Paper}>
    <Table className={classes.table} size="small" aria-label="a dense table"    >
      <TableHead style={{color:'blue'}}>
        <TableRow>
          <TableCell align="center" style={{background:'#00f7ff'}} >Date</TableCell>
          {/* <TableCell align="center" className='tHeadTwo'>Ap No</TableCell> */}
          <TableCell align="center" style={{background:'#00f7ff'}} >Accountability</TableCell>
          <TableCell align="center" style={{background:'#00f7ff'}} >Metrix</TableCell>
          <TableCell align="center"  style={{background:'#00f7ff'}}>Target</TableCell>
          <TableCell align="center"  style={{background:'#00f7ff'}}>Actual</TableCell>
          <TableCell align="center"  style={{background:'#00f7ff'}}>Reason Not Achive Target</TableCell>
          <TableCell align="center" style={{background:'#00f7ff'}}>Root Cause</TableCell>
          <TableCell align="center" style={{background:'#00f7ff'}}>Counter</TableCell>
          <TableCell align="center" style={{background:'#00f7ff'}}>Resp</TableCell>
          <TableCell align="center" style={{background:'#00f7ff'}}>Target</TableCell>
          <TableCell align="center" style={{background:'#00f7ff'}}>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rccmData.map((row) => (
          <TableRow key={row.id}>
            <TableCell  align="center" scope="row" className='tHeadThreeD'>
              { moment(row.in_date).format('YY MMM D')}
            </TableCell>
            {/* <TableCell align="center"  className='tHeadOneD'>{row.ap_no}</TableCell> */}
            <TableCell align="center" >{row.accountability}</TableCell>
            <TableCell align="center" > {row.metix}</TableCell>
            <TableCell align="center" >{row.target}</TableCell>
            <TableCell align="center" >{row.actual}</TableCell>
            <TableCell align="center" >{row.reason_achive_not_target}</TableCell>
            <TableCell align="center" >{row.root_cause}</TableCell>
            <TableCell align="center" >{row.counter_measure}</TableCell>
            <TableCell align="center" >{row.resp}</TableCell>
            <TableCell align="center" >{row.target}</TableCell>
            <TableCell align="center" >{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer></div>
  </Container></Container>
