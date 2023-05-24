<script setup>
import TableHeader from '../components/TableHeader.vue'
import TableRow from '../components/TableRow.vue'
</script>

<template>
  <div class="table">
    <TableHeader />
    <TableRow name="Alarmy (Premium)" details="audio reminders, tactile feedback, snoozable, paid ($x)" link="Link" rating="Rating" />
    <TableRow name="Coalarm" details="audio reminders, free" link="Link" rating="Rating" />
    <TableRow name="Cozi Family Organizer" details="includes calendar, syncs with group, free" link="Link" rating="Rating" />
    <TableRow name="Google Calendar" details="tactile feedback, includes calendar, syncs with group, free" link="Link" rating="Rating" />
    <TableRow name="Talk to me Alarm Clock" details="audio reminders, tactile feedback, free" link="Link" rating="Rating" />
    <TableRow name="Reminder" details="audio reminders, tactile feedback, picture reminders, includes calendar, paid ($x)" link="Link" rating="Rating" />
  </div>
</template>

<style scoped>
.table {
  margin-top: 10px;
  overflow-x: auto;
  overflow-y: auto;
  height: 400px;
}
</style>
