<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="edit"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </template></PostForm
    ><AppAlert
      :show="showAlert"
      :message="alertMessage"
      :type="alertType"
    ></AppAlert>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts.js';
import { PostForm } from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';
const route = useRoute();
const id = route.params.id;
const router = useRouter();

const form = ref({
  title: null,
  content: null,
});
const fetchPost = async () => {
  try {
    const { data } = await getPostById(id);
    setForm(data);
  } catch (err) {
    console.err(err);
    vAlert('네트워크 오류!');
  }
};
const setForm = ({ title, content }) => {
  form.value.title = title;
  form.value.content = content;
};
fetchPost();

const goDetailPage = () => {
  router.push({ name: 'PostDetail', params: { id } });
};

const edit = async () => {
  try {
    await updatePost(id, { ...form.value });
    // router.push({ name: 'PostDetail', params: { id } });
    vAlert('수정이 완료되었습니다~!', 'success');
  } catch (err) {
    console.log(err);
  }
};

// alert
const showAlert = ref(false);
const alertMessage = ref('');
const alertType = ref('');
const vAlert = (message, type = 'error') => {
  showAlert.value = true;
  alertMessage.value = message;
  alertType.value = message;
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
};
</script>

<style lang="scss" scoped></style>
