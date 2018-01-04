import vjs from 'video.js'
// import vjsr from 'videojs-record'

const Record = () => {
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
		<button id="btn-record">Record</button>
	)
}

export default Record