import React from 'react'

//Территориальное расположение
class Location extends React.Component {
	render() {
		const { reset } = this.props;
		return (
			<div className="calc__location">
				<h2 className="calc__title">Территориальное расположение:</h2>
				<div className="calc__radio-wrap">
					<label className="calc-radio">
						<input
							id="location"
							className="calc-radio__input"
							name="location"
							type="radio"
							value="city"
							onChange={reset}
						/>
						<span className="calc-radio__box"></span>
						<span className="calc-radio__text">
							Город, пгт.
						</span>
					</label>
					<label className="calc-radio">
						<input
							id="location"
							className="calc-radio__input"
							name="location"
							type="radio"
							value="village"
							onChange={reset}
						/>
						<span className="calc-radio__box"></span>
						<span className="calc-radio__text">
							Сельская местность
						</span>
					</label>
				</div>
			</div>
		)
	}
}

export { Location }
