<template>
  <div class="login-container">
    <n-card class="login-card">
      <h2 class="login-title">欢迎登录</h2>
      <n-form :model="form" :rules="rules" label-width="80px">
        <n-form-item label="用户名" prop="username">
          <n-input v-model="form.username" />
        </n-form-item>
        <n-form-item label="密码" prop="password">
          <n-input v-model="form.password" type="password" />
        </n-form-item>
        <n-form-item>
          <n-button type="primary" @click="login">登录</n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { NForm, NFormItem, NInput, NButton, NCard } from 'naive-ui';

const form = ref({
  username: '',
  password: '',
});

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};

const { emit } = defineEmits();
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #f4f4f4;
}

.login-card {
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  text-align: center;
}

.login-title {
  font-size: 24px;
  margin-bottom: 20px;
}

/* 自定义样式，您可以根据需要进行调整 */
.n-button {
  width: 100%;
  margin-top: 20px;
}

.n-form-item {
  margin-bottom: 20px;
}

.n-input {
  width: 100%;
}
</style>
