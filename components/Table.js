const h1Style = {
  fontSize: '30px',
  textTransform: 'uppercase',
  fontWeight: '300',
  textAlign: 'center',
  marginBottom: '15px'
}


const Table = (props) => {

  return (  
    <div>
      <h1 style={h1Style} >Saved Memories</h1>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Notes</th>
              <th>Date</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            <tr>
              <td>
                <img src="https://picsum.photos/g/300/200" alt="thumbnail" />
              </td>
              <td>My First Memory</td>
              <td>notes about my first memory.</td>
              <td>January 1, 2018</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table