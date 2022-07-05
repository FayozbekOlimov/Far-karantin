import { Divider } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { managementUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { ManagementUrlInfoType, ManagementUrlResType } from '../../../types';
import './style.scss';

function Representatives() {
	const [loading, setLoading] = useState<boolean>(true);
	const [pageData, setPageData] = useState<ManagementUrlInfoType[]>([]);

	const getPageData = useCallback(() => {
		setLoading(true);
		baseAPI.fetchAll<ManagementUrlResType>(managementUrl)
			.then((res) => {
				if (res.data.status === "200") {
					setPageData(res.data?.data);
					setLoading(false);
				}
			})
			.catch(e => console.log('Error:', e.message));
	}, []);

	useEffect(() => {
		getPageData();
	}, [getPageData])

	return (
		<div className="leadership_card page_card">
			<h4 className="page_title">
				Hududiy boshqarmalar
			</h4>
			<div className="leadership_body representatives">
				{pageData.map(item => (
					<React.Fragment key={item.id}>
						<div className="info_body">
							<div className="img_area">
								<img src={item.image} alt={item.name} />
							</div>
							<div className="right">
								{/* <h2 className="rank">
								{item.}
							</h2> */}
								<h2 className="fio">
									{item.name}
								</h2>
								{
									item.phone && <p className="information">
										<b>Telefon :</b> <a href={`tel:${item.phone}`}>{item.phone}</a>
									</p>
								}
								{
									item.fax && <p className="information">
										<b>Fax :</b> <a href={`tel:${item.fax}`}>{item.fax}</a>
									</p>
								}
								{
									item.work_day && <p className="information">
										<b>Qabul kunlari :</b> {item.work_day}
									</p>
								}
								{
									item.email && <p className="information">
										<b>Elektron pochta :</b> <a href={`mailto:${item.email}`}>{item.email}</a>
									</p>
								}
							</div>
						</div>
						<Divider className='divider' />
					</React.Fragment>
				))}
			</div>
		</div>
	)
}

export default Representatives