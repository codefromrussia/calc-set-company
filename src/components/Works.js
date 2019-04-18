import React from 'react'

class Works extends React.Component {
	renderWorks = (arr) => {
		const { handleInputChange, calcResult } = this.props;

		const worksTemplate = arr.map(function(item) {
			return (
				<div className="calc__radio-wrap" key={item.id}>
					<label className="calc-radio">
						<input
							id={item.category}
							className="calc-radio__input"
							name={item.category}
							type="radio"
							value={item.price}
							onChange={
								(e) => {
									handleInputChange(e);
									setTimeout(() => {calcResult()},1);
								}
							}
						/>
						<span className="calc-radio__box"></span>
						<span className="calc-radio__text">
							{item.text}
						</span>
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
				<h2 className="calc__title">Набор работ:</h2>
				{ this.renderWorks(works) }
			</div>
		)
	}
}

export { Works }