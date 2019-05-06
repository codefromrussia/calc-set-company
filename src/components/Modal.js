import React from 'react';
import axios from 'axios' //подключаем обработчик сетевых запросов

export class Modal extends React.Component {

	state = {
		name: '',
		phone: '',
		email: '',
		isSendMessage: null,
		isValid: null
	}

	sendForm = (e) => {

		e.preventDefault();

		const { name, phone, email } = this.state;

		const { resultMaxPower, resultStandard, closeModal } = this.props;
		
		if(!(name && phone))  {
			this.setState({ isValid: false });
			return false;
		} else {
			this.setState({ isValid: true });
		}
		
		axios
		.post(
			`/calc-mail.php`, {
			projectName: 'ООО СК',
			formSubject: 'Новая заявка',
			name: name,
			phone: phone,
			email: email,
			resultMaxPower: resultMaxPower,
			resultStandard: resultStandard
		})
		.then((res) => {
				setTimeout(closeModal, 2000);
				this.successSendMessage();
			})
			.catch((err) => {
				this.errorSendMessage();
		})
	}

	successSendMessage = () => {
		this.setState({
			name: '',
			phone: '',
			email: '',
			isSendMessage: true,
			isValid: null
		})
	}

	errorSendMessage = () => {
		this.setState({isSendMessage: false})
	}


	changeInput = (e) => {
		const { id, value } = e.currentTarget;

		this.setState({ [id]: value });
	}

	render() {
		const { isOpenModal, closeModal } = this.props;
		const { name, phone, email, isSendMessage, isValid } = this.state;

		if ( !isOpenModal ) {
			return false;
		}

		return (
			<div className="modal">
				<button className="modal__close"
								onClick={closeModal}></button>
				<h2 className="modal__title">Оформление заявки</h2>
				<form className="modal__form">
					<input id="name" 
								 className="modal__input" 
								 type="text"
								 placeholder="Имя*"
								 required
								 value={name}
								 onChange={this.changeInput} />
					<input id="phone" 
								 className="modal__input"
								 type="tel"
								 placeholder="Телефон*" 
								 required
								 value={phone}
								 onChange={this.changeInput} />
					<input id="email"
								 className="modal__input last-child"
								 type="email"
								 placeholder="E-mail"
								 value={email}
								 onChange={this.changeInput} />
					<button className="modal__btn"
									onClick={ this.sendForm }>Отправить</button>

					{ isSendMessage === true && <p className="modal__success">Заявка успешно отправлена</p> }
					{ isSendMessage === false && <p className="modal__error">Упс! Сообщение не отправлено</p> }
					{ isValid === false && <p className="modal__error">Заполните обязательные поля</p> }
					
				</form>
			</div>
		)
	}
}