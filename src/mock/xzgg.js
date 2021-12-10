import Mock from 'mockjs'

// 行政公告

// title: 是标题
// time: 是时间日期
// srcList: 是图片容器,可放多张
Mock.mock('http://192.168.10.120:89/user',
	[	
		{
			id: 13,
			title: '2021年國慶節放假公告',
			time: '2021.9.22',
			srcList: [
				require('../assets/img/xz/2021年國慶節放假公告.jpg'),
			],
		},
		{
			id: 12,
			title: '人事公告-2',
			time: '2021.9.7',
			srcList: [
				require('../assets/img/xz/人事公告-2.jpg'),
			],
		},
		{
			id: 11,
			title: '人事公告-1',
			time: '2021.9.7',
			srcList: [
				require('../assets/img/xz/人事公告-1.jpg'),
			],
		},
		{
			id: 10,
			title: '2021年中秋節放假公告',
			time: '2021.9.2',
			srcList: [
				require('../assets/img/xz/2021年中秋節放假公告.jpg'),
			],
		},
		{
			id: 9,
			title: '2021年中秋節加餐公告',
			time: '2021.9.2',
			srcList: [
				require('../assets/img/xz/2021年中秋節加餐公告.jpg'),
			],
		},
		{
			id: 8,
			title: '人事公告',
			time: '2021.7.21',
			srcList: [
				require('../assets/img/xz/人事公告2021.7.21.jpg'),
			],
		},
		{
			id: 7,
			title: '人事命令',
			time: '2021.6.28',
			srcList: [
				require('../assets/img/xz/人事命令6.28.jpg'),
			],
		},
		{
			id: 6,
			title: '人事命令',
			time: '2021.6.23',
			srcList: [
				require('../assets/img/xz/人事命令21.6.23.jpg'),
			],
		},
		{
			id: 5,
			title: '人事命令',
			time: '2021.6.5',
			srcList: [
				require('../assets/img/xz/人事命令.jpg'),
			],
		},
		{
			id: 4,
			title: '2021年端午節放假公告',
			time: '2021.6.4',
			srcList: [
				require('../assets/img/xz/2021年端午節放假公告.jpg'),
			],
		},
		{
			id: 3,
			title: '2021年端午節加餐公告',
			time: '2021.6.4',
			srcList: [
				require('../assets/img/xz/2021年端午節加餐公告.jpg'),
			],
		},
		{
			id: 2,
			title: '2021五一勞動節放假公告',
			time: '2021.4.30',
			srcList: [
				require('../assets/img/xz/2021五一勞動節放假公告.jpg'),
			],
		},
		{
			id: 1,
			title: '2021年五一勞動節加餐公告',
			time: '2021.4.30',
			srcList: [
				require('../assets/img/xz/2021年五一勞動節加餐公告.jpg'),
			],
		},
	]
);

