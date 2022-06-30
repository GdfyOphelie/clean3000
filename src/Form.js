import React, { Component } from 'react'
import TextArea from 'antd/lib/input/TextArea';
import DatePicker from 'antd/lib/date-picker';
import Input from 'antd/lib/input';
import { Link } from 'react-router-dom';




export default class Form extends Component {
    state = {
        name: null,
        date: null,
        client: null,
        observations: null
    };

    // fonction qui permet d'écrire dans les input
    change = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    // fonction pour envoyer les saisies 
    submit = e => {
        e.preventDefault();
        this.props.addIntervention(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <DatePicker id="date" onChange={this.change} />

                    <br />
                    <br />

                    <Input type="text" id="name" placeholder='Technicien' onChange={this.change} />

                    <br />
                    <br />


                    <Input type="text" id="client" placeholder='Client/Entreprise' onChange={this.change} />

                    <br />
                    <br />


                    <TextArea rows={4} id="observations" placeholder="Observations" onChange={this.change} />

                    <br />
                    <br />
                    <Link to={`/recap`}>
                        <button >Enregistrer</button>
                    </Link>
                </form>
            </div>
        )
    }
}
