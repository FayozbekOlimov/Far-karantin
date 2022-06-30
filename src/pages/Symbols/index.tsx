import { Col, Row } from 'antd'
import { useCallback, useEffect, useState } from 'react';
import { symbolsUrl } from '../../api/apiUrls';
import baseAPI from '../../api/baseAPI';
import { SymbolUrlInfoType, SymbolUrlResType } from '../../types';
import './style.scss'

function Symbols() {
	const [loading, setLoading] = useState<boolean>(true);
	const [symbolData, setSymbolData] = useState<SymbolUrlInfoType>([]);
	const getSymbolData = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll<SymbolUrlResType>(symbolsUrl)
			.then((res) => {
				if (res.data.status === "200") {
					setSymbolData(res.data?.data);
					setLoading(false);
				}
			})
			.catch(e => console.log('Error:', e.message));
	}, []);

	useEffect(() => {
		getSymbolData();
	}, [getSymbolData])

	return (
		<section className="symbols">
			<div className="container">
				<Row gutter={[16, 16]} justify="center">
					<Col xs={24} md={18}>
						<div className="page_card">
							<div dangerouslySetInnerHTML={{ __html: symbolData[0]?.content }}>
							</div>
							<audio className='symbols__audio' controls src={symbolData[0]?.music}></audio>
						</div>
					</Col>
				</Row>
			</div>
		</section>
	)
}

export default Symbols