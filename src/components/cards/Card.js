import React from "react";
import { data } from "../../helpers/Data";
import "./Card.css";

function Card() {

    return (
        <div className="card-container">
            {data.map((card) => {
                return (
                    <div className="cards" key={card.id}>
                        <div className="title">
                            <h2>{card.title}</h2>
                        </div>
                        <img src={card.image} alt={card.title} />
                        <div className="card-over">
                            <p>{card.desc}</p>
                        </div>

                    </div>
                );
            })};


        </div>
    );
};

export default Card;

// Another Solution
// return (
//     <div className="card-container">
//         <div className="cards">
//             <div className="title">
//                 <h2>{data[0].title}</h2>
//             </div>


//             <img src={data[0].image} alt={data[0].title} />

//             <div className="card-over">
//                 <p>{data[0].desc}</p>
//             </div>
//         </div>

//     </div>
// );


// Using useState

// import React, { useState } from "react";
// import { data } from "../../helpers/Data";
// import "./Card.css";
// function Card() {
//     const [showImage, setShowImage] = useState(true);
//     return (
//         <div className="card-container" onClick={() => setShowImage(!showImage)}>
//             {showImage ? (
//                 <>
//                     {data.map((card) => {
//                         return (
//                             <div className="cards" key={card.id}>
//                                 <img src={card.image} alt={card.title} />
//                             </div>
//                         );
//                     })}
//                 </>
//             ) : (
//                 <>
//                     {data.map((card) => {
//                         return (
//                             <div className="cards" key={card.id}>
//                                 <div className="title">
//                                     <h2>{card.title}</h2>
//                                 </div>
//                                 <img src={card.image} alt={card.title} />
//                                 <div className="card-over">
//                                     <p>{card.desc}</p>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </>
//             )}
//         </div>
//     );
// }
// export default Card;