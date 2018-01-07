// Libraries
import React from 'react'

// Next Components
import Head from 'next/head'
import Link from 'next/link'

// Custom Components
import Layout from '../components/GlobalLayout'
import Record from '../components/Record'
import Script from '../components/Script'
import Table from '../components/Table'

const Index = () => {

	return (
	  <Layout>

	  	<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />

			<link href="//vjs.zencdn.net/5.19/video-js.min.css" rel="stylesheet" /> 

			<Script>
				{
					() => {
						console.log('foo');
					}
				}
			</Script>

			<script async src="https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/6.0.4/adapter.js" />
			<script async src="https://cdn.webrtc-experiment.com/RecordRTC.js" />
			<script async src="https://unpkg.com/video.js/dist/video.js" />
	  	</Head>

	    <h1>Memori</h1>

	    <Record testprop={true} />

	    <Table>Test Table</Table>

	  </Layout>
	)
}

export default Index