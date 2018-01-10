// Libraries

// Next Components
import Head from 'next/head'
import Link from 'next/link'

// Custom Components
import Layout from '../components/GlobalLayout'
import Record from '../components/Record'
import Table from '../components/Table'

const sx = {
	record: {
		// width: '960px',
		margin: '0 auto'
	}
}

const Index = () => {

	return (
	  <Layout>

	  	<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />

			<link href="https://cdnjs.cloudflare.com/ajax/libs/video.js/6.3.3/video-js.css" rel="stylesheet" /> 
			<link href="https://cdnjs.cloudflare.com/ajax/libs/videojs-record/2.0.5/css/videojs.record.css" rel="stylesheet" /> 

			<script src="https://cdnjs.cloudflare.com/ajax/libs/video.js/6.3.3/video.js" />
			<script src="https://cdn.webrtc-experiment.com/RecordRTC.js" />
			<script src="https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/6.0.4/adapter.js" />
			<script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-record/2.0.5/videojs.record.min.js" />

	  	</Head>

	    <h1 className="title">Memorix</h1>

	    <Record style={sx.record} />

	    <Table></Table>

	  </Layout>
	)
}

export default Index