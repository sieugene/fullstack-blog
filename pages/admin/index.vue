<template>
  <div>
    <h1>Аналитика по постам</h1>
    <AnalyticChart
      title="Количество просмотров"
      :labels="views.labels"
      :data="views.data"
    />
    <AnalyticChart
      title="Количество комментариев"
      :labels="comments.labels"
      :data="comments.data"
    />
  </div>
</template>
<script>
import AnalyticChart from "@/components/admin/AnalyticChart";

export default {
  components: {
    AnalyticChart
  },
  head() {
    return {
      title: `Аналитика | ${process.env.appName}`
    };
  },
  layout: "admin",
  middleware: ["admin-auth"],
  async asyncData({ store }) {
    const { views, comments } = await store.dispatch("post/getAnalytics");

    return { views, comments };
  }
};
</script>
