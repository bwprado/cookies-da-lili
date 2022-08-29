export const getStatus = (data, status) => {
	let allStatus = {
		total: data[status] > 0 ? 'green' : 'red',
		status:
			data[status] === 'ordered'
				? 'red'
				: data[status] === 'delivered'
				? 'none'
				: data[status] === 'production'
				? 'blue'
				: data[status] === 'ready'
				? 'green'
				: '',
		totalPaid:
			data[status] - data.totalOrdered > 0
				? 'green'
				: data[status] - data.totalOrdered < 0
				? 'red'
				: data[status] - data.totalOrdered === 0
				? 'none'
				: '',
	}
	return allStatus[status]
}

export const hp = (promise) =>
	promise.then((res) => [null, res]).catch((err) => [err])

export const validateEmail = (email) => {
	let regex = /\S+@\S+\.\S+/
	return regex.test(email)
}
