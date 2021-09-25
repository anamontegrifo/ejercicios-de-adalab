const Link = (props) => {
	const NewTab = props.openInNewTab ? '_blank' : '';
	return (
		<li className="li-items">
			<a
				className="nav__link"
				href={props.href}
				title={props.title}
				target={NewTab}
				rel="noreferrer"
			>
				{props.text}
			</a>
		</li>
	);
};

export default Link;
