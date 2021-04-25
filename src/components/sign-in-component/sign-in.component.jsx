import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custome-button/custom-button.component';
import { auth, SignInWithGoogle } from '../../firebase/firebaseConfig';
import './sign-in.styles.scss'

class Signin extends React.Component {

    constructor(props) {

        super(props);

        this.state = ({
            email: '',
            password: '',
        })
    }


    handleSubmit = async event => {

        event.preventDefault();
        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });

        } catch (error) {
            console.log('there was an error');
        }

        event.preventDefault();
        this.setState({
            email: '',
            password: '',
        })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="signin">
                <h1>Please login</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="email" type="email" name="email" value={this.state.email} required />
                    <FormInput handleChange={this.handleChange} label="password" type="password" name="password" value={this.state.password} required />
                    <CustomButton type="submit"> Login</CustomButton>
                    <CustomButton className="g-button" onClick={SignInWithGoogle} > Login With Google</CustomButton>

                </form>
            </div>
        )
    }
}

export default Signin