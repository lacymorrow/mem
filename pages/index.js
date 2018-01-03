import Link from 'next/link'
// import vjs from 'videojs-record'

const Index = () => {
	function onComponentDidMount() {
		const MediaStreamRecorder = require('msr');
		console.log('require-msr', MediaStreamRecorder);

		console.log('\n\n-------\n\n');

		var recorder = new MediaStreamRecorder({});
		console.log('MediaStreamRecorder', recorder);

		console.log('\n\n-------\n\n');

		var multiStreamRecorder = new MediaStreamRecorder.MultiStreamRecorder([]);
		console.log('MultiStreamRecorder', multiStreamRecorder);
	}

	return (
	  <div>
	    <h1>Memori</h1>
	    <button id="btn-record">Record</button>
	    <Link href="/about">
	      <a>About Memori</a>
	    </Link>
	  </div>
	)
}

export default Index