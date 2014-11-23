var React = require('react'),
	Field = require('../field');

// Scope jQuery and the bootstrap-markdown editor so it will mount
//var $ = require('jquery');

	
module.exports = Field.create({
	componentDidMount: function() {
		// only have access to `refs` during componentDidMount
		//$(this.refs.htmldownTextarea.getDOMNode());
	},
	renderField: function() {
		console.log(this);
		var styles = {
			padding: 8
		};
		return (
			<div className="">
				<textarea style={styles} defaultValue="" ref="htmlTextarea" className="form-control html"></textarea>
			</div>
		);
	}	
});