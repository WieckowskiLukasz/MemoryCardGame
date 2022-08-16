import React, { useState, useEffect } from 'react';
import cookies from 'js-cookies';

export default function CookiesInfo() {

	const [cookiesAccepted, setCookiesAccepted] = useState<boolean>();
	
	useEffect(() => {
    const info = cookies.getItem('info');
		if(info)setCookiesAccepted(true);
		else setCookiesAccepted(false);
  });

	const handleButton = () =>{
		document.cookie = `info=true; path=/;`;
		setCookiesAccepted(true);
	};

  return (
    <>
			{!cookiesAccepted ?
				<div className='info-cookies'>
					<div className='info-cookies__content'>
						<div className='info-cookies__warning'>
							<div className='info-cookies__text'>
                The website uses cookies to provide services in accordance with the Privacy Policy. You can define the conditions for storing or accessing cookies in your browser.
							</div>
							<button 
                onClick={()=> handleButton()} className='info-cookies__button'
              >
								<i className="las la-check"></i>Accept
							</button>
						</div>
					</div>
				</div>
			: null}
		</>
  );
};
