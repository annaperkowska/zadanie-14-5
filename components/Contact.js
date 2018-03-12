var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('div', {className: 'contactItem'},
				React.createElement('img', {
					className: 'contactImage',
					src: 'https://images.pexels.com/photos/35612/people-homeless-male-street.jpg?h=350&auto=compress&cs=tinysrgb'
				}),
				React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
				React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
				React.createElement('p', {className: 'contactEmail', href: 'mailto: ' + this.props.item.email},
					this.props.item.email
				)
			)
		)
	},
});