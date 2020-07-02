import React, { Component } from 'react';
import users from './users';

const Person = ({ id, name, age, gender, email, phoneNo }) => {
    return (
        <div key={id} className="person">
            <div>
                <h4>Name : {name}</h4>
                <h4>Age : {age}</h4>
                <h4>Gender : {gender}</h4>
                <h4>Email-ID : {email}</h4>
                <h4>Contact : {phoneNo}</h4>
            </div>
        </div>
    );
};

const PersonList = (props) => {

    var people = props.user.map(function (person) {
        return <Person id={person.id} name={person.name} age={person.age} gender={person.gender} email={person.email} phoneNo={person.phoneNo} />
    }
    );
    return (
        <div className="container">
            <section className="person-list">
                <div>{people}</div>
            </section>
            <div className="logout_btn">
                <a href='/' className="FormField__Button_logout">Logout</a>
            </div>
        </div>
    );
};

class User extends Component {
    render() {
        return <PersonList user={users} />;
    }
}

export default User;