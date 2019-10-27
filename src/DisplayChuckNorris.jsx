import  React  from  'react';

const  DisplayChuckNorris = ({ chuck }) => {
    return (
        <div  className="DisplayChuckNorris">
            <img  src={chuck.icon_url}  alt="icon"  />
            <ul>
                <li>Id : {chuck.id}</li>
                <li>Url : {chuck.url}</li>
                <li>Value : {chuck.value}</li>
            </ul>
        </div>
    );
};

export  default  DisplayChuckNorris;