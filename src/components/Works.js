import React from 'react'

class Works extends React.Component {
	renderWorks = (arr, func) => {
		const worksTemplate = arr.map(function(item) {
			return (
				<div key={item.id}>
					<label>
						<input
							id={item.priceCategory}
							name="work"
							type="radio"
							value={item.price}
							onChange={func}
						/>
						{item.text}
					</label>
				</div>
			);
		});

		return worksTemplate;
	}

	render() {
		const { works, handleInputChange } = this.props;

		return (
			<div>
				<h2>Набор работ:</h2>
				{ this.renderWorks(works, handleInputChange) }
			</div>
		)
	}
}

export { Works }