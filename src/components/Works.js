import React from 'react'

class Works extends React.Component {
	renderWorks = (arr) => {
		const { handleInputChange, calcResult } = this.props;

		const worksTemplate = arr.map(function(item) {
			return (
				<div key={item.id}>
					<label>
						<input
							id={item.priceCategory}
							name="work"
							type="radio"
							value={item.price}
							onChange={
								(e) => {
									handleInputChange(e);
									setTimeout(() => {calcResult()},1);
								}
							}
						/>
						{item.text}
					</label>
				</div>
			);
		});

		return worksTemplate;
	}

	render() {
		const { works } = this.props;

		return (
			<div>
				<h2>Набор работ:</h2>
				{ this.renderWorks(works) }
			</div>
		)
	}
}

export { Works }