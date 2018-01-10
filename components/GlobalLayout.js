import Header from './Header'

const sx = {
  layout: {
    // background: '#27302E', //jk
    background: 'white',
    boxShadow: '0 0 4px rgba(0,0,0,0.4)',
    borderRadius: '5px',
  	margin: '0',
  	padding: '2em',
  	fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif',
    fontWeight: '600',
  	color: '#222'
  }
}

const Layout = (props) => (
  <div style={sx.layout}>
    
    {props.children}

    <style jsx global>{`
      * { box-sizing: border-box; margin: 0; padding: 0 }

      body { 
      	background: -webkit-linear-gradient(left, #25c481, #25b7c4);
      	background: linear-gradient(to right, #25c481, #25b7c4);
        font-size: 1.5em;
      }
    `}</style>
  </div>
)

export default Layout