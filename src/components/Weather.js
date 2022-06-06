import React,{ Component } from 'react';

const Weather = (props) => {
    
        return(
            <div className="info">
                {
                    props.tempreature && <p className="info_key">Tempreature :
                         <span className="info_value">
                            {props.tempreature}
                         </span>
                         </p>
                }

               
                
                {
                    props.city && <p className="info_key">City :
                         <span className="info_value">
                            {props.city}
                         </span>
                         </p>
                }

                {
                    props.country && <p className="info_key">Country :
                         <span className="info_value">
                            {props.country}
                         </span>
                         </p>
                }



                {
                    props.humuiity && <p className="info_key">Humuiity :
                         <span className="info_value">
                            {props.humuiity}
                         </span>
                         </p>
                }

                {
                    props.description && <p className="info_key">Description :
                         <span className="info_value">
                            {props.description}
                         </span>
                         </p>
                }

                {
                    props.error && <p className="info_key">Error :
                         <span className="info_value">
                            {props.error}
                         </span>
                         </p>
                }
                
      
            </div>
        ) 
    
}

export default Weather;