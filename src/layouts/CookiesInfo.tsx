import React, { useState, useEffect } from 'react';
import cookies from 'js-cookies';
import Languages from '../layouts/Languages.tsx';

export default function CookiesInfo() {

	const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(true);
	
	useEffect(() => {
    const info: string = cookies.getItem('info');
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
								<Languages text={'cookiesInfo'}/>
							</div>
							<button 
                onClick={()=> handleButton()} className='info-cookies__button'
              >
								<i className="las la-check"></i><Languages text={'acceptButton'}/>
							</button>
						</div>
					</div>
				</div>
			: null}
		</>
  );
};
