/* import originAxios from 'axios'
import qs from 'qs'
 */
/* export default function axios(option) {
	return new Promise((resolve, reject) => {
		// 1.创建axios的实例
		const instance = originAxios.create({
			baseURL: 'http://123.207.32.32:8000',
			timeout: 5000
		});

		// 配置请求和响应拦截
		instance.interceptors.request.use(config => {
			// console.log('来到了request拦截success中');
			// 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

			// 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

			// 3.对请求的参数进行序列化(看服务器是否需要序列化)
			// config.data = qs.stringify(config.data)
			// console.log(config);

			// 4.等等
			return config
		}, err => {
			// console.log('来到了request拦截failure中');
			return err
		})

		instance.interceptors.response.use(response => {
			// console.log('来到了response拦截success中');
			return response.data
		}, err => {
			console.log('来到了response拦截failure中');
      console.log(err);
      if (err && err.response) {
				switch (err.response.status) {
					case 400:
						err.message = '请求错误'
						break
					case 401:
						err.message = '未授权的访问'
						break
				}
			}
			return err
		})

		// 2.传入对象进行网络请求
		instance(option).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
 */
	import axios from 'axios';
	
	const baseURL = "http://123.207.32.32:8000/api/w1"
	//const baseURL = "http://106.54.54.237:8000/api/w1"
	

    export function request(config){
       // return new Promise((resolve,reject)=>{
            //1.创建啊axios 实例
            const instance1 = axios.create({
				//baseURL:'http://123.207.32.32:8000',
				baseURL:baseURL,
                timeout:5000
            })
            //2.axios的拦截器
            instance1.interceptors.request.use((config)=>{
                return config 
            },err=>{
            })

            instance1.interceptors.response.use((result)=>{
                return result.data
            },err=>{
                console.log(err)
            })

            //3.发送真正的网络需求
            return instance1(config)     //instance本身就是一个Promise,所以不需要再在外面包一个new Promise,否则，result.data需要（reslove）
       // })
    }