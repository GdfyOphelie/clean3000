import React from 'react'

const List = props => {
    const interventionList = props.interventionList;
    const data = interventionList.map(data => {
        return (
            <div className="test" key={data.id}>
                <div>Date : {data.date}</div>
                <div>Technicien : {data.name}</div>
                <div>Client/Entreprise {data.client}:</div>
                <div>Observations {data.observations}:</div>

            </div>
        );
    });
    return <div className="intervention-list">{data}</div>;
};

export default List;

