import Mock from 'mockjs'

// 邮件分机

// title: 是标题
// time: 是时间日期
// srcList: 是图片容器,可放多张
Mock.mock('http://192.168.10.120:89/yjfj',
	[
		// {
		// 	title: '邮件分机',
		// 	time: '2021.4.1',
		// 	srcList: [
		// 		// require('../assets/img/yjfj/ask.jpg'),
		// 		require('../assets/img/yjfj/malu.jpg')
		// 	],
		// },
		// {
		// 	title: '邮件分机2', 
		// 	time: '2021.4.5',
		// 	srcList: [
		// 		'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
		// 		'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
		// 	],
		// },
	]
);

