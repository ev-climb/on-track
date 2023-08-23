<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :h="timelineItem.h" />
    <BaseSelect
      placeholder="Rest"
      :selected="selectedActivityId"
      :options="activitySelectOptions"
      @select="selectedActivityId = $event"
    />
  </li>
</template>

<script setup>
import { ref } from 'vue'
import { isTimelineItemValid, validateSelectOptions } from '../validators'
import BaseSelect from '@/components/BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})

const selectedActivityId = ref(0)
</script>

<style lang="scss" scoped></style>
