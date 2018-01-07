import Header from './Header'

const layoutStyle = {
	margin: '1em',
	padding: '1em',
	fontFamily: 'Roboto, sans-serif',
	color: '#fff'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    
    <Header />

    {props.children}

    <style jsx global>{`
      * { box-sizing: border-box; margin: 0; padding: 0 }

      body { 
      	background: -webkit-linear-gradient(left, #25c481, #25b7c4);
      	background: linear-gradient(to right, #25c481, #25b7c4);
      }

      table{
        width:100%;
        table-layout: fixed;
      }
      .tbl-header{
        background-color: rgba(255,255,255,0.3);
       }
      .tbl-content{
        height:300px;
        overflow-x:auto;
        margin-top: 0px;
        border: 1px solid rgba(255,255,255,0.3);
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
        border-bottom: solid 1px rgba(255,255,255,0.1);
      }
    `}</style>
  </div>
)

export default Layout