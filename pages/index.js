import Head from 'next/head'
import Link from 'next/link'
import Table from '../components/Table'
import Layout from '../components/GlobalLayout'
import Record from '../components/Record'

const Index = () => {

	return (
	  <Layout>

	  	<Head>
	  	  <meta name="viewport" content="width=device-width, initial-scale=1" />
	  	  <meta charSet="utf-8" />
	  	</Head>

	    <h1>Memori</h1>

	    <Table>Test Table</Table>

	  </Layout>
	)
}

export default Index