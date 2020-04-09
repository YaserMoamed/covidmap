import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
export default class Covid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latest :[],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('https://corona.lmao.ninja/countries')
        .then(res => res.json())
        .then(json => {
            this.setState({isLoaded: true,
            latest: json,})
        })
    }
    render() {
        let { isLoaded, latest } = this.state;
        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else {
        return (
            <div>
                <div className="row">
               <ul>
                   {latest.map(item => (
                    <div className="card col" key={item.countryInfo._id} style={{"backgroundImage": item.countryInfo.flag}}>
                            <ul className="list-group list-group-flush">
                            <h5 className="card-title">{item.country}</h5>
                             <li className="list-group-item">{item.cases}</li>
                            <li className="list-group-item">{item.todayCases}</li>
                   <li className="list-group-item">{item.recoverd}</li>
                                 </ul>
                    </div>
                   ))};
               </ul>
            </div>
            </div>
        )
    }
}
}
