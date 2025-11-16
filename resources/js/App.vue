<template>
  <div class="d-flex">
    <SideBar />

    <LoadingOverlay :show="isLoading" />

    <div class="content flex-grow-1">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import SideBar from "./components/SideBar.vue";
import LoadingOverlay from "./components/LoadingOverlay.vue";

export default {
  components: { SideBar, LoadingOverlay },
  setup() {
    const isLoading = ref(false);
    const router = useRouter();

    router.beforeEach((to, from, next) => {
      isLoading.value = true;
      next();
    });

    router.afterEach(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 900);
    });

    return { isLoading };
  }
};
</script>
