


<Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  KPI
                </TableCell>
                <TableCell>
                  Actual
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      MTD
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                {/* {mfgData} */}
              </TableRow>
            </TableHead>
            <TableBody>
            
                <TableRow>
                   <TableCell>
                    {'Weight'}
                  </TableCell>
                  <TableCell>
                  {mfgData}
                  </TableCell>
                  <TableCell>
                    {mfgDataMTD}
                  </TableCell>
                   
                </TableRow>
                <TableRow>
                   <TableCell>
                    {'Pices'}
                  </TableCell>
                  <TableCell>
                  {mfgDataCount}
                  </TableCell>
                  <TableCell>
                    {mfgDataCountMTD}
                  </TableCell>
                   
                </TableRow>
              
            </TableBody>
          </Table>