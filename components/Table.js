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
      <h1 style={h1Style} >{props.children}</h1>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              <th></th>
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
                <img src="https://picsum.photos/g/160/120" alt="thumbnail" />
              </td>
              <td>My First Memory</td>
              <td>notes about my first memory.</td>
              <td>January 1, 2018</td>
            </tr>
            <tr>
              <td>
                <img src="https://picsum.photos/g/160/120" alt="thumbnail" />
              </td>
              <td>My First Memory</td>
              <td>notes about my first memory.</td>
              <td>January 1, 2018</td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx global>{`
          table{
            width: 100%;
            table-layout: fixed;
          }
          .tbl-header{
            background-color: rgba(0,0,0,0.2);
            margin: 4em 0 0 0;
          }
          .tbl-content{
            height:300px;
            overflow-x:auto;
            margin-top: 0px;
            border: 1px solid rgba(0,0,0,0.1);
          }
          th{
            padding: 20px 15px;
            text-align: left;
            font-weight: 500;
            font-size: 12px;
            text-transform: uppercase;
          }
          td{
            padding: 15px;
            text-align: left;
            vertical-align:middle;
            font-weight: 300;
            font-size: 12px;
            border-bottom: solid 1px rgba(0,0,0,0.1);
          }
        `}</style>
    </div>
  )
}

export default Table