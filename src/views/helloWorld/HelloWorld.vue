<template>
  <div class="hello">
    <Student ref="student"  :student="student" />
    <School ref="school" :msg="msg" />
    <el-button @click="handeleTo">点击为组件干点事情</el-button>
  </div>
</template>

<script>
import "./hello.scss";
import School from "../../components/school";
import Student from "../../components/student";
export default {
  name: "HelloWorld",
  components: { School, Student },
  data() {
    return {
      msg: "浙江理工",
      student: "金哲羽",
    };
  },
  methods: {
    handeleTo(){
      this.$refs.school.show()
    }
  },
};
</script>
