import './card.css';

const status = {
	Alive: 'status alive',
	Dead: 'status dead',
	unknown: 'status',
}

export default function createCard(data, key) {
	return (
		<li key={key} className="listStyle">
			<div className="card">
				<div className="imgSection">
					<img className="avatar" src={data.image} alt={data.name} />
				</div>

				<div className="container">
					<div className="text">
						<p className="title">Name</p>
						<p className="data">{data.name}</p>
					</div>

					<div className="text">
						<p className="title">Status</p>
						<div className='flexR'>
						<div className={status[data.status] || 'unknow' }></div>
						<p className="data">{data.status}</p>
						</div>
					</div>

					<div className="text">
						<p className="title">Origin</p>
						<p className="data">{data.origin.name}</p>
					</div>

					<div className="text">
						<p className="title">Specie</p>
						<p className="data">{data.species}</p>
					</div>
				</div>
			</div>
		</li>
	);
}
