const defaultOptions = {
    controls: true,
    fluid: true,
    plugins: {
        record: {
            audio: true,
            video: true,
            maxLength: 120,
            debug: true
        }
    }
}


class Record extends React.Component {
		constructor(props) {
			super(props);
			this.state = {};
		}

		componentDidMount() {
			// instantiate Video.js
			this.player = videojs(this.videoNode, (this.props.options) ? this.props.options : defaultOptions, function onPlayerReady() {
				// print version information at startup
				videojs.log('Using video.js', videojs.VERSION,
					'with videojs-record', videojs.getPluginVersion('record'),
					'and recordrtc', RecordRTC.version);
			});

			// error handling
			this.player.on('error', function(error) {
				console.warn(error);
			});

			// monitor stream data during recording
			this.player.on('timestamp', function() {
			    // timestamps
			    console.log('current timestamp: ', player.currentTimestamp);
			    console.log('all timestamps: ', player.allTimestamps);

			    // stream data
			    console.log('array of blobs: ', player.recordedData);
			    // or construct a single blob:
			    // var blob = new Blob(blobs, {
			    //     type: 'video/webm'
			    // });
			});

			// record finished dispatch
			this.player.on('finishRecord', function() {
				let file = this.player.recordedData
			    console.log('finished recording:', file)
			});
		}

		// destroy player on unmount
		componentWillUnmount() {
			if (this.player) {
				this.player.dispose()
			}
		}


	render (){
		return (
			<div style={this.props.style} data-vjs-player>
				<video ref={ node => this.videoNode = node } className="video-js "></video>
				<h5 style={{margin: '1em', textAlign: 'right', color: '#222'}}>
					{`(max length: ${defaultOptions.plugins.record.maxLength} seconds)`}
				</h5>
			</div>
		)
	}
}

export default Record