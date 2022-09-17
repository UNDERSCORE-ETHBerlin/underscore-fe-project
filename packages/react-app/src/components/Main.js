const Main = ({ items }) => {
	if (!items) return <div>Loading</div>;

	return items.map((item) => <div>{item}</div>);
};

export default Main;
