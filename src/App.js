import React,{useState} from 'react'
import {GrPlayFill,GrPauseFill} from 'react-icons/gr'
import MicRecorder from 'mic-recorder-to-mp3';
// import useAudio from './useAudio'

const App = ()=> {

	const [Mp3Recorder] = useState(new MicRecorder({ bitRate: 128 }));

	const [isRecording,setIsRecording] = useState(false)
	const [isBlocked,setIsBlocked] = useState(true)


	// const getUserPermission = ()=> {
	// 	navigator.mediaDevices.getUserMedia({audio:true})
	// 		.then(()=> {
	// 			console.log('Permission granted')
	// 			setIsBlocked(false)
	// 		})
	// 		.catch(()=> {
	// 			console.log('Permission denied')
	// 			setIsBlocked(true)
	// 		})
	// }

	const startRecording = ()=> {
		// getUserPermission()
		setIsRecording(true)
		Mp3Recorder
			.start()
			.then(()=> {
				setIsRecording(true)
			})
			.catch((err)=> {
				console.log(err)
			})
	}

	const stopRecording = ()=> {
		setIsRecording(false)
		Mp3Recorder
			.stop()
			.getMp3()
			.then(([buffer,blob]) => {
				const file = new File(buffer, 'audiorec.mp3', {
					type: blob.type,
					lastModified: Date.now()
				});	
				
				console.log(file)
			})
			.catch((err)=> {
				console.log(err)
			})
	}

	return (
		<main>
			<div className='main-body'>
				<div className='title'>
					<h1>Record Audio</h1>
				</div>
				<div className='btn-container'>
					<button onClick={isRecording ? stopRecording : startRecording}>
						{isRecording ? "Stop Recording" : "Start Recording"}
					</button>
				</div>
			</div>
		</main>
	)
}


export default App
