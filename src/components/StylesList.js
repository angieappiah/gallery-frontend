import React from 'react';
	
	const StylesList = ({ galleries }) => {
	  
	    const renderStyles = galleries.map(gallery =>
	       <Gallery key={gallery.id} gallery={gallery} />
	    );
	  
	      return (
	        <div className="Styles-list">
	          <div className="container-fluid">
	            <div className="row">
	              {renderStyles}
	            </div>
	          </div>  
	        </div>
	      )
	  
	  }
	  
	  export default StylesList;
