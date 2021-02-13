import React from "react";

function CompSSR() {
    return (
        <div>
        <div className="text-center bg-danger text-dark">
          <p className="text-dark font-weight-bold"> 
              Este componente está sendo renderizado por SSR
          </p>
        </div>
      </div>
    );
  }
  
  export default CompSSR;



