<template>
  <div class="contain">
    <el-form>
      <el-form-item label="开始时间">
        <el-date-picker
            v-model="form.start"
            type="date"
            value-format="yyyy-MM-dd"
            @change="change1"
            :picker-options="option1"
            placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间">
        <el-date-picker
            v-model="form.end"
            type="date"
            value-format="yyyy-MM-dd"
            @change="change2"
            :picker-options="option2"
            placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["student"],
  data() {
    return {
      form: {
        start: "",
        end: "",
        choiceDate: "",
      },
    };
  },
  computed: {
    option1() {
      return {
        disabledDate: (time) => {
          return time.getTime() > new Date(this.form.end) || time.getTime() < Date.now();
        },
      };
    },
    option2(){
      return {
        disabledDate:time=>{
          return time.getTime() < new Date(this.form.start)
        }

      }
    }
  },
  methods: {

    change1(val) {
      console.log("1", val);
    },
    change2(val) {
      console.log("2", val);
    },
  },
};
</script>

<style lang="scss"></style>
