<template>
	<div id="date">
		<el-date-picker
	      v-model="value1"
	      type="date"
	      placeholder="选择日期"
	      :picker-options="pickerOptions0">
	    </el-date-picker>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				value1:'',
				pickerOptions0: {
          			disabledDate(time) {
            		return time.getTime() < Date.now() - 8.64e7;
          			}
        		},
			}
		}
	}
</script>