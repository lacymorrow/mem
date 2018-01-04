const h1Style = {
  fontSize: '30px',
  textTransform: 'uppercase',
  fontWeight: '300',
  textAlign: 'center',
  marginBottom: '15px'
}


const Table = () => {

  return (  
    <div>
      <h1 style={h1Style}>Saved Memories</h1>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              <th>Code</th>
              <th>Company</th>
              <th>Price</th>
              <th>Change</th>
              <th>Change %</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            <tr>
              <td>AAC</td>
              <td>AUSTRALIAN COMPANY </td>
              <td>$1.38</td>
              <td>+2.01</td>
              <td>-0.36%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table