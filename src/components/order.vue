<template>
	<div id="order">
		<h3>订单客资列表</h3>
		<div class="searchOrder">
			<ul>
				<li>
					<p>
						<span>订单ID：</span>
						<input type="text" placeholder="ID" :value = "msg">
					</p>
					<p>
						<span>顾客姓名：</span>
						<input type="text" placeholder="顾客姓名">
					</p>
					<p>
						<span>QQ：</span>
						<input type="text" placeholder="QQ">
					</p>
					<p>
						<span>微信：</span>
						<input type="text" placeholder="微信">
					</p>
					<p>
						<span>手机：</span>
						<input type="text" placeholder="手机">
					</p>
				</li>
				<li>
					<p>
						<span>订单状态：</span>
						<select name="orderSta" id="">
							<option value="">全部</option>
						</select>
					</p>
					<p>
						<span>订单类别：</span>
						<select name="orderType" id="">
							<option value="">全部</option>
						</select>
					</p>
					<p>
						<span>地区：</span>
						<select name="orderCity" id="">
							<option value="">全部</option>
						</select>
					</p>
					<p>
						<span>建单客服：</span>
						<select name="setKH" id="">
							<option value="">全部</option>
						</select>
					</p>
					<p>
						<span>邀约客服：</span>
						<select name="yyKH" id="">
							<option value="">全部</option>
						</select>
					</p>
					<p>
						<span>线下部门：</span>
						<select name="offlineDoor" id="">
							<option value="">全部</option>
						</select>
					</p>
					<p>
						<span>线下门市：</span>
						<select name="offlineMS" id="">
							<option value="">全部</option>
						</select>
					</p>
					<p class="displayBlock"></p>
					<p>
						<span>渠道：</span>
						<select name="orderSta" id="">
							<option value="">全部</option>
						</select>
					</p>
					<p>
						<span>来源：</span>
						<select name="orderType" id="">
							<option value="">全部</option>
						</select>
					</p>
					<p>
						<span>异常：</span>
						<select name="orderCity" id="">
							<option value="">全部</option>
						</select>
					</p>
					<p>
						<span>流失原因：</span>
						<select name="orderWX" id="">
							<option value="">全部</option>
						</select>
					</p>
					<p>
						<span>金平台分享：</span>
						<select name="setKH" id="">
							<option value="">全部</option>
						</select>
					</p>
					<p>
						<span>渠道部门：</span>
						<select name="yyKH" id="">
							<option value="">全部</option>
						</select>
					</p>
				</li>
				<li>
					<p>
						<span>建单时间：</span>
						<input type="text">
					</p>
					<p>
						<span>分配时间：</span>
						<input type="text">
					</p>
					<p>
						<span>追踪时间：</span>
						<input type="text">
					</p>
					<p>
						<span>邀约进店时：</span>
						<input type="text">
					</p>
					<p>
						<span>实际进店时：</span>
						<input type="text">
					</p>
					<p>
						<span>门店分配时：</span>
						<input type="text">
					</p>
					<p class="displayBlock"></p>
					<p>
						<span>流失时间：</span>
						<input type="text">
					</p>
					<p>
						<span>未进店时：</span>
						<input type="text">
					</p>
					<p>
						<span>未流失时：</span>
						<input type="text">
					</p>
					<p>
						<span>成交时间：</span>
						<input type="text">
					</p>
					<p>
						<span>无效时间：</span>
						<input type="text">
					</p>
					<p>
						<span>最后操作时：</span>
						<input type="text">
					</p>
				</li>
				<li>
					<p>
						<input class="beginSea" type="button" value="开始查询">
					</p>
					<p>
						<input class="setBB" type="button" value="生成报表">
					</p>
					<p>
						<input class="resetBD" type="button" value="重置表单">
					</p>
				</li>
			</ul>
			
		</div>
		<div class="showOrder">
				<p>
					<input class="addOrder" type="button" value="新增订单">
				</p>
				<table>
					<thead>
						<tr>
							<td>ID</td>
							<td>姓名</td>
							<td>电话</td>
							<td>微信</td>
							<td>地区</td>
							<td>建单时间</td>
							<td>渠道</td>
							<td>来源</td>
							<td>类别</td>
							<td>预约进店</td>
							<td>邀约客服</td>
							<td>线下门店</td>
							<td>线下门市</td>
							<td>状态</td>
							<td>金牌匹配</td>
							<td>提交方式</td>
							<td>流失原因</td>
							<td>渠道备注</td>
							<td>邀约备注</td>
							<td>线下备注</td>
							<td>分配到店</td>
							<td>实际到店</td>
							<td>下次追踪</td>
							<td>成交时间</td>
							<td>最后操作</td>
							<td>渠道部门</td>
							<td>时间</td>
							<td>操作</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td v-for = " (val,ind) in goodsData ">{{val}}</td>
						</tr>
					</tbody>
				</table>
			</div>
	</div>

</template>
<script>
	// console.log($http);	
	import {mapActions,mapGetters} from 'vuex';//调用vuex上面的两个方法：mapActions：，mapGetters
	export default{
		data(){
			return{
				msg:1
				// ,
				// data:""
			}
		},
		computed:mapGetters([
				'goodsData',
		])
		,
		created(){
			// this.getData();
			this.$store.dispatch('goodsData');
			console.log(this.$store);
		}
		// ,
		// methods:{
		// 	getData(){
		// 		console.log(this.$http);
		// 		var _this = this;
		// 		this.$http.get('src/data/data.data').then(function(res){
		// 			console.log(res.data);
		// 			_this.data = res.data;
		// 		}).catch(function(err){
		// 				console.log(err);
		// 		});

		// 	}
		// }
	}
</script>
<style scoped>
	#order{color: white;width: 1400px;margin:0 auto;background: white;padding:15px 10px;}
	.searchOrder{background: #65cea7;padding:15px 10px;}
	h3{font-weight: 100;color: black;}
	.searchOrder p{display: inline-block;}
	p.displayBlock{display: block;}
	input{border-radius: 3px;height: 30px;line-height: 30px;outline: none;padding-left: 5px;border: 1px solid #9e7777;-webkit-input-placeholder:#9e7777;}
	ul li{border-bottom: 1px dashed white; padding-bottom: 20px;margin-top: 20px;}
	select{height: 30px;width: 80px;color:#a39797;font-weight: 600;}
	ul li:nth-of-type(1) p span{width: 88px;display: inline-block;}
	ul li:nth-of-type(2) p{margin-bottom: 5px; }
	ul li:nth-of-type(2) p span{width: 106px;display: inline-block;}
	ul li:nth-of-type(3) p{margin-bottom: 5px;}
	ul li:nth-of-type(3) p input{width: 112px;}
	ul li:nth-of-type(3) p span{width: 100px;display: inline-block;}
	ul li:last-child{border-bottom: none;margin-bottom: 10px;padding-bottom: 10px;}
	input[type=button]{color: white;padding: 5px 10px;height: 43px;width: 85px;border: none;border-radius: 5px;cursor: pointer;}
	.beginSea{background: #424f63;}
	.setBB{background: #d9534f;}
	.resetBD{background: #f0ad4e;}
	.showOrder{background: white;border-top: 1px dashed #ddd;margin-top: 20px;}
	.addOrder{background: #424f63;margin-top: 20px;margin-bottom: 20px;}
	table{border-collapse: collapse;color: #656565;text-align: center;}
	table tr td{border:1px solid #dddddd;}
</style>