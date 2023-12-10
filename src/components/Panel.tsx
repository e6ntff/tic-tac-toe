import React from 'react';

interface Props {
	symbol: string
}

const Panel:React.FC<Props> = (props) => {
	return <div className='flex gap-2'>
		<div className='bg-blue-50 px-2 py-2 rounded'>
			<p className='text-5xl text-blue-300'>{`${props.symbol} turn`}</p>
		</div>
	</div>
}

export default Panel
