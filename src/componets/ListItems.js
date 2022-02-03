import React from 'react';




const ListItems = () => {
    return (<div className=" py-5">
        
            <div className="list-group border border-light d-sm-none d-none d-md-block" style={{ fontSize: "11px" }}>
           
                <h4 className='text-center'>
                    Browse by Category
                </h4>
            <a href="/architecture" className="list-group-item list-group-item-action">Architecture</a>

            <a href="/Arts&Photography" className="list-group-item list-group-item-action ">Arts & Photography</a>
            <a href="/Biographies&Memoirs" className="list-group-item list-group-item-action ">Biographies & Memoirs</a>
            <a href="/BodyMind&Spirit" className="list-group-item list-group-item-action ">
                    Body, Mind & Spirit</a>
                
                <a href="/religion&spirituality" className="list-group-item list-group-item-action ">Religion & Spirituality</a>
            <a href="/Science&Mathematics" className="list-group-item list-group-item-action ">Science & Mathematics</a>
            <a href="/SelfHelp&PersonalDevelopment" className="list-group-item list-group-item-action ">Self Help & Personal Development</a>
            <a href="/Society&socialsciences" className="list-group-item list-group-item-action ">Society & social sciences</a>
            <a href="/Sports" className="list-group-item list-group-item-action ">Sports</a>
            <a href="/Technology&Engineering" className="list-group-item list-group-item-action ">Technology & Engineering</a>
            <a href="/Travel&holiday" className="list-group-item list-group-item-action ">Travel & holiday</a>
            
            </div>
       
    </div>);
};

export default ListItems;
