import  React  from  'react';

const  GenerateChuckNorris = ({ selectChuck }) => {
    return (
        <div  className="GenerateChuckNorris">
            <button  onClick={selectChuck}>Get Chuck Norris</button>
        </div>
    );
};

export  default  GenerateChuckNorris;