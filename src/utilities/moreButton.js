import React from 'react';
import '../App.css';
import Fade from 'react-reveal/Fade';






class MoreButton extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.toggleBox = this.toggleBox.bind(this);
	}
  
	toggleBox() {
		const { opened } = this.state;
		
		this.setState({
			opened: !opened, 
		});
		
	}
  
	render() {
		var { title, children } = this.props;
		const { opened } = this.state;


			if(!opened){
            title =<button className="moreButton"  onClick={this.toggleBox} 
			> <span></span>
			<span></span>
			<span></span>
			<span></span>Click here to find out!</button>;
			}


		return (
			<div>
			
				<div >
					{title}
				</div>
			
				{opened && (
		
	
					<Fade >
					<div className="containerHome2">
			
						{children}
						
					</div>
					</Fade>
			
				)}
				
			</div>
		);
	}
}
  
  export default MoreButton;