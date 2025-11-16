import { createRouter, createWebHistory } from "vue-router";
import MasterBarang from "./components/MasterBarang.vue";
import BarangMasuk from "./components/BarangMasuk.vue";
import BarangKeluar from "./components/BarangKeluar.vue";
import Laporan from "./components/Laporan.vue";

const routes = [
  { path: "/master-barang", name: "MasterBarang", component: MasterBarang },
  { path: "/barang-masuk", name: "BarangMasuk", component: BarangMasuk },
  { path: "/barang-keluar", name: "BarangKeluar", component: BarangKeluar },
  { path: "/laporan", name: "Laporan", component: Laporan },
  { path: "/", redirect: "/master-barang" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;