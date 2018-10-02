const LineConnect = require('./connect');
let line = require('./main.js');
let LINE = new line();


const auth = {
	authToken: 'Ex2L3A9cWUodNKqdU0u7.EvEhTRbX2doH0SStwSMDfW.QvAdDi0dx+jgsN1LIlPUyM8ARMnZCgVnaQxJgC5li0c=',
	certificate: '0be81213559fa9d5a30676e6f6baf1f5a4e10d746663626a5cb95a895185189a',
	email: '',
	password: ''
}

let client =  new LineConnect();
//let client =  new LineConnect(auth);

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});

