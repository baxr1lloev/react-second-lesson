import React from "react";
import ItemComponent from "./__childs/ItemComponent";

const ScreenThree = (props) => {

    // const Items = () => {
    //     return props.data.map(item => <ItemComponent item ={item} />)
    // }

  return(
    <section className="sectionThree">
        <h2>Our best</h2>
        <div className="wrapper">
          {props.data.map(item => <ItemComponent item ={item} />)}
            {/* <Items></Items> */}
        </div>
    </section>
  ); 
};

export default ScreenThree;