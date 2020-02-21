// 1
const logPost = async function (postId) {
	const postReq = await fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
	const json = await postReq.json()
	const post = `
	Title: ${json.title}
	Post: ${json.body}
	`
	console.log(post)
}

// logPost(6)

// 2
const logUsers = async function () {
	const usersReq = await fetch("https://jsonplaceholder.typicode.com/users/")
	const json = await usersReq.json()
	const users = json.map(
		function (user) {
			return user.name
		}).join(", ")
	console.log(users)
}

// logUsers()

// 3
const getBizUsers = async function () {
	const usersReq = await fetch("https://jsonplaceholder.typicode.com/users/")
	const json = await usersReq.json()
	const bizUsers = json.filter(
		function (user) {
			return user.email.includes(".biz")
		})
	console.log(bizUsers)
}

// getBizUsers()

// 4
const longestPost = async function () {
	const postReq = await fetch("https://jsonplaceholder.typicode.com/posts/")
	const json = await postReq.json()
	const postsSortedLength = json.sort(
		function (a, b) {
			return b.body.length - a.body.length
		})
	console.log(postsSortedLength[1].body.length)
}

// longestPost()

//5
const getCompletedTasks = async function () {
	const todoReq = await fetch("https://jsonplaceholder.typicode.com/todos")
	const json = await todoReq.json()
	const completedTasks = json.filter(
		function (task) {
			return task.completed
		})
	console.log(completedTasks)
}

// getCompletedTasks()

//6
const displayPhotos = async function () {
	const photosReq = await fetch("https://jsonplaceholder.typicode.com/photos")
	const json = await photosReq.json()

	let photos = json.slice(0, 9)
	document.body.innerHTML = photos.map(function (photo) {
		return `<img src="${photo.url}" alt="${photo.title}">`
	}).join("")
}

// displayPhotos()

//7
const findClosest = async function () {
	const usersReq = await fetch("https://jsonplaceholder.typicode.com/users/")
	const json = await usersReq.json()

	const userByProximity = json.sort(
		function (a, b) {
			return proximity(a) - proximity(b)
		})
}

function proximity(user) {
	const myLocation = navigator.geolocation.getCurrentPosition((user) => {})
}
