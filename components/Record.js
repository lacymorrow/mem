// import vjs from 'video.js'
// import vjsr from 'videojs-record'
// import { Player } from 'video-react';

class Record extends React.Component {
	constructor(props){
	    super(props);
	    this.state = {};
	  }

	render (){
		return (
			<div>
				<button id="btn-record">Record</button>
			</div>
		)
	}
}

export default Record