const data = {
	theaters: [
		{
			id: 0,
			name: 'Theater1',
			operations: [
				{
					id: 0,
					patient: 'Eivind',
					startTime: '2017-09-20 14:37',
					endTime: '2017-09-20 15:37'
				},
				{
					id: 1,
					patient: 'Felix',
					startTime: '2017-09-20 10:21',
					endTime: '2017-09-20 11:37'
				}
			] 
		},
		{
			id: 1,
			name: 'Theater2',
			operations: [
				{
					id: 2,
					patient: 'Nina',
					startTime: '2017-09-20 15:58',
					endTime: '2017-09-20 18:07'
				},
				{
					id: 3,
					patient: 'Fredrik',
					startTime: '2017-09-20 08:11',
					endTime: '2017-09-20 09:55'
				}
			] 
		},
		{
			id: 2,
			name: 'Theater3',
			operations: [
				{
					id: 4,
					patient: 'Jenny',
					startTime: '2017-09-20 09:30',
					endTime: '2017-09-20 10:07'
				},
				{
					id: 5,
					patient: 'Svenn-Helge',
					startTime: '2017-09-20 10:43',
					endTime: '2017-09-20 11:37'
				},
				{
					id: 6,
					patient: 'Magnus',
					startTime: '2017-09-20 18:11',
					endTime: '2017-09-20 20:55'
				}
			] 
		}
	]
}

export const transformData = data => {
	const transformedData = []
	data.theaters.forEach((theater, i) => {
		theater.operations.forEach(operation => {
			transformedData.push({...operation, theater: i})
		})
	})
	return transformedData
}

export default data