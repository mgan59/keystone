var React = require('react'),
	Field = require('../field');


// Scope jQuery and the bootstrap-markdown editor so it will mount
//var $ = require('jquery');
//var tinymce = require('tinymce');
	
module.exports = Field.create({
	componentDidMount: function() {
		// only have access to `refs` during componentDidMount
		//$(this.refs.htmlTextarea.getDOMNode()).tinymce();
		console.log('ding',$(this.refs.htmlTextarea.getDOMNode()));
	},
	renderField: function() {
		console.log('checking for props to handoff to wysiwig',this.props);
		var styles = {
			padding: 8
		};
		return (
			<div className="">
				<textarea style={styles} defaultValue="" ref="htmlTextarea" className="form-control wysiwyg"></textarea>
			</div>
		);
	}	
});