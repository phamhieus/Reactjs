import React from 'react';
import Row from '../reducers/Row';
import '../styles/css/style.css';
import TableHeader from '../components/TableHeader';
import Footer from '../components/Footer';
import Headers from '../components/Header';




export default class Form {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            phone: '',
            avatar: '',
            hobbie: '',
            note: '',
            gender: '',
            age: 0
        };
    }

    handleOnChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {

    }

    validate = ()=>{

    }

    render() {
        const rows = this.props.Rows;
        return (
            <>
                <Headers />
                <form>
                    <table className='table'>
                        <tbody>
                            <TableHeader />
                            {
                                rows.map(row => <Row key={row.Id} Row={row} handleOnChange={this.handleOnChange} />)
                            }
                        </tbody>
                    </table>
                </form>
                <Footer />
            </>
        );
    }
}
